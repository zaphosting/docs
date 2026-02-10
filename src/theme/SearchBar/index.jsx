import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import './styles.css';

const MIN_QUERY_LENGTH = 3;
const TAB_ORDER = ['game', 'docs', 'landingPage', 'posts'];
const sanitizeBase = (url) => url.replace(/\/+$/, '');

const buildTabs = (counts, labels) => {
    const entries = [];
    const types = counts?.types || {};
    TAB_ORDER.forEach((key) => {
        if (typeof labels[key] !== 'string') {
            return;
        }
        const count = types[key] ?? 0;
        entries.push({
            key,
            count,
            label: labels[key],
        });
    });

    return entries.filter((tab) => tab.count > 0);
};

const normalizeItems = (items) => {
    if (Array.isArray(items)) {
        return items;
    }

    return [];
};

const renderIcon = (icon, title) => {
    if (! icon || typeof icon !== 'object') {
        return null;
    }

    if (icon.type === 'image') {
        return <img src={icon.value} alt={title || ''} className="zap-search-icon" loading="lazy" />;
    }

    if (icon.type === 'html') {
        return (
            <span
                className="zap-search-icon"
                aria-hidden="true"
                dangerouslySetInnerHTML={{__html: icon.value}}
            />
        );
    }

    if (icon.type === 'class') {
        return <i className={icon.source} aria-hidden="true" />;
    }

    return null;
};

const Search = (props) => {
    const containerRef = useRef(null);
    const requestId = useRef(0);
    const debounceRef = useRef(null);
    const abortRef = useRef(null);
    const aiRequestRef = useRef(0);

    const {siteConfig, i18n} = useDocusaurusContext();
    const locale = i18n?.currentLocale || 'en';
    const copy = useMemo(() => ({
        placeholder: translate({
            id: 'search.placeholder',
            message: 'Search products, games, docs…',
            description: 'Placeholder text for the navbar search input',
        }),
        loading: translate({
            id: 'search.loading',
            message: 'Searching…',
            description: 'Loading text while search results are being fetched',
        }),
        empty: translate({
            id: 'search.empty',
            message: 'No matching results.',
            description: 'Shown when search returns no results',
        }),
        failure: translate({
            id: 'search.failure',
            message: 'Search is unavailable. Please try again.',
            description: 'Shown when search fails',
        }),
        short: translate({
            id: 'search.short',
            message: 'Enter at least 3 characters.',
            description: 'Shown when the search query is too short',
        }),
        askAiHeading: translate({
            id: 'search.askAiHeading',
            message: 'Ask our AI',
            description: 'Heading for the Ask AI section',
        }),
        askAiDescription: translate({
            id: 'search.askAiDescription',
            message: 'Get AI-powered answers based on our documentation.',
            description: 'Description for the Ask AI section',
        }),
        askAiButton: translate({
            id: 'search.askAiButton',
            message: 'Go!',
            description: 'Button label for the Ask AI action',
        }),
        askAiGenericError: translate({
            id: 'search.askAiGenericError',
            message: 'Failed to generate answer. Please try again.',
            description: 'Generic error for Ask AI failures',
        }),
        askAiUnavailable: translate({
            id: 'search.askAiUnavailable',
            message: 'Ask AI is currently unavailable.',
            description: 'Shown when Ask AI is disabled',
        }),
        askAiRateLimited: translate({
            id: 'search.askAiRateLimited',
            message: 'Slow down, you\'re asking too many questions, please try again later!',
            description: 'Shown when Ask AI rate limit is reached',
        }),
        askAiLoadingText: translate({
            id: 'search.askAiLoadingText',
            message: 'Thinking...',
            description: 'Loading text while Ask AI prepares an answer',
        }),
        tabs: {
            game: translate({
                id: 'search.tabs.game',
                message: 'Products',
                description: 'Tab label for product search results',
            }),
            docs: translate({
                id: 'search.tabs.docs',
                message: 'Docs',
                description: 'Tab label for documentation search results',
            }),
            landingPage: translate({
                id: 'search.tabs.landingPage',
                message: 'Pages',
                description: 'Tab label for landing page search results',
            }),
            posts: translate({
                id: 'search.tabs.posts',
                message: 'Blog',
                description: 'Tab label for blog search results',
            }),
        },
    }), [locale]);
    const marketingBase = useMemo(() => {
        const source = siteConfig?.customFields?.searchSite || siteConfig?.url || '';

        return sanitizeBase(String(source));
    }, [siteConfig]);

    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('game');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);
    const [askAiEnabled, setAskAiEnabled] = useState(false);
    const [aiLoading, setAiLoading] = useState(false);
    const [aiAnswer, setAiAnswer] = useState(null);
    const [aiError, setAiError] = useState(null);
    const [currentLoadingLabel, setCurrentLoadingLabel] = useState(copy.loading);
    const expanded = open || props.isSearchBarExpanded;
    const hasQuery = query.trim().length >= MIN_QUERY_LENGTH;
    const hasResults = results?.counts?.global > 0;
    const showAskAi = askAiEnabled && hasQuery && hasResults;
    const canRequestAi = showAskAi && ! aiLoading;

    const buildSearchUrl = useCallback((term, echoId) => {
        const endpoint = `${marketingBase}/${locale}/customer/_ajax/json_getWebSearchResults.php`;
        const url = new URL(endpoint);
        url.searchParams.set('searchTerm', term);
        url.searchParams.set('show', String(echoId));
        url.searchParams.set('language', locale);

        return url.toString();
    }, [locale, marketingBase]);

    const fetchResults = useCallback(async (term, echoId) => {
        setError(null);
        if (abortRef.current) {
            abortRef.current.abort();
        }
        const controller = new AbortController();
        abortRef.current = controller;

        const response = await fetch(buildSearchUrl(term, echoId), {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            signal: controller.signal,
        }).catch((error) => {
            if (error?.name === 'AbortError') {
                return null;
            }

            return null;
        });

        if (abortRef.current === controller) {
            abortRef.current = null;
        }

        if (requestId.current !== echoId) {
            return;
        }

        if (! response || ! response.ok) {
            setError(copy.failure);
            setLoading(false);

            return;
        }

        let payload = null;

        try {
            payload = await response.json();
        } catch (exception) {
            payload = null;
        }

        if (! payload || payload.result !== 'success') {
            setError(copy.failure);
            setLoading(false);

            return;
        }

        const counts = payload.data?.counts || {global: 0, types: {}};
        const items = payload.data?.results || {};
        setResults({counts, items});
        const availableTabs = buildTabs(counts, copy.tabs);

        if (availableTabs.length > 0) {
            setActiveTab(availableTabs[0].key);
        }

        setLoading(false);
    }, [buildSearchUrl, copy.failure, copy.tabs]);

    const resetAiState = useCallback(() => {
        setAiAnswer(null);
        setAiError(null);
        setAiLoading(false);
    }, []);

    const resolveAiError = useCallback((message) => {
        const lookup = {
            ask_ai_disabled: copy.askAiUnavailable,
            ask_ai_rate_limited: copy.askAiRateLimited,
            ask_ai_invalid_query: copy.askAiGenericError,
            ask_ai_no_results: copy.empty,
        };

        return lookup[message] ?? copy.askAiGenericError;
    }, [copy.askAiGenericError, copy.askAiRateLimited, copy.askAiUnavailable, copy.empty]);

    const fetchAskAiConfig = useCallback(async () => {
        const url = new URL(`${marketingBase}/${locale}/customer/_ajax/json_getAISearchAnswer.php`);
        url.searchParams.set('action', 'config');
        url.searchParams.set('language', locale);

        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).catch(() => null);

        if (! response) {
            setAskAiEnabled(false);
            return;
        }

        let payload = null;
        try {
            payload = await response.json();
        } catch (exception) {
            payload = null;
        }

        if (! payload || payload.result !== 'success') {
            setAskAiEnabled(false);
            resetAiState();
            return;
        }

        const enabled = Boolean(payload.data?.enabled);
        setAskAiEnabled(enabled);
        if (! enabled) {
            resetAiState();
        }
    }, [locale, marketingBase, resetAiState]);

    const requestAiAnswer = useCallback(async () => {
        if (! canRequestAi) {
            return;
        }

        setAiError(null);
        setAiAnswer(null);
        setAiLoading(true);
        setCurrentLoadingLabel(copy.askAiLoadingText);

        const reqId = aiRequestRef.current + 1;
        aiRequestRef.current = reqId;

        const url = new URL(`${marketingBase}/${locale}/customer/_ajax/json_getAISearchAnswer.php`);
        url.searchParams.set('searchTerm', query.trim());
        url.searchParams.set('language', locale);

        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).catch(() => null);

        if (reqId !== aiRequestRef.current) {
            return;
        }

        if (! response) {
            setAiError(copy.failure);
            setAiLoading(false);
            return;
        }

        let payload = null;
        try {
            payload = await response.json();
        } catch (exception) {
            payload = null;
        }

        if (! payload || payload.result !== 'success') {
            setAiError(resolveAiError(payload?.message));
            setAiLoading(false);
            return;
        }

        setAiAnswer(payload.data?.answer ?? '');
        setAiLoading(false);
    }, [canRequestAi, copy.askAiLoadingText, copy.failure, locale, marketingBase, query, resolveAiError]);

    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        if (query.trim().length < MIN_QUERY_LENGTH) {
            setLoading(false);
            setResults(null);
            resetAiState();

            return undefined;
        }

        setLoading(true);
        const echoId = requestId.current + 1;
        requestId.current = echoId;
        debounceRef.current = window.setTimeout(() => {
            fetchResults(query.trim(), echoId);
        }, 300);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [fetchResults, query, resetAiState]);

    useEffect(() => {
        const handler = (event) => {
            if (! containerRef.current) {
                return;
            }

            if (! containerRef.current.contains(event.target)) {
                setOpen(false);
                props.handleSearchBarToggle?.(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [props]);

    useEffect(() => {
        fetchAskAiConfig();
    }, [fetchAskAiConfig]);

    useEffect(() => {
        setCurrentLoadingLabel(copy.loading);
    }, [copy.loading]);

    useEffect(() => {
        if (results === null) {
            resetAiState();
        }
    }, [results, resetAiState]);

    const tabs = useMemo(() => {
        if (! results) {
            return [];
        }

        return buildTabs(results.counts, copy.tabs);
    }, [copy.tabs, results]);

    const activeItems = useMemo(() => {
        if (! results) {
            return [];
        }

        const bucket = results.items?.[activeTab];

        return normalizeItems(bucket);
    }, [activeTab, results]);

    const showPanel = open || query.trim().length >= MIN_QUERY_LENGTH;

    return (
        <div className={clsx('navbar__search', 'zap-search')} key="search-box" ref={containerRef}>
            <div className="zap-search-input-wrap">
                <span className="zap-search-icon-left" aria-hidden="true">🔍</span>
                <input
                    id="search_input_react"
                    type="search"
                    value={query}
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setOpen(true);
                        props.handleSearchBarToggle?.(true);
                    }}
                    onFocus={() => {
                        setOpen(true);
                        props.handleSearchBarToggle?.(true);
                    }}
                    placeholder={copy.placeholder}
                    aria-label={copy.placeholder}
                    className={clsx(
                        'navbar__search-input',
                        expanded ? 'search-bar-expanded' : 'search-bar',
                    )}
                    autoComplete="off"
                />
                {query !== '' && (
                    <button
                        type="button"
                        className="zap-search-clear"
                        onClick={() => {
                            setQuery('');
                            setResults(null);
                            setOpen(false);
                            setLoading(false);
                            setError(null);
                            props.handleSearchBarToggle?.(false);
                        }}
                        aria-label="Clear search"
                    >
                        ×
                    </button>
                )}
            </div>

            {showPanel && (
                <div className="zap-search-panel">
                    {query.trim().length < MIN_QUERY_LENGTH && (
                        <div className="zap-search-status">{copy.short}</div>
                    )}

                    {query.trim().length >= MIN_QUERY_LENGTH && loading && (
                        <div className="zap-search-status">{copy.loading}</div>
                    )}

                    {query.trim().length >= MIN_QUERY_LENGTH && ! loading && error && (
                        <div className="zap-search-status zap-search-error">{error}</div>
                    )}

                    {query.trim().length >= MIN_QUERY_LENGTH && ! loading && ! error && ! hasResults && (
                        <div className="zap-search-status">{copy.empty}</div>
                    )}

                    {query.trim().length >= MIN_QUERY_LENGTH && ! loading && ! error && hasResults && (
                        <>
                            {showAskAi && (
                                <div className="zap-search-ai">
                                    <div className="zap-search-ai__header">
                                        <div>
                                            <div className="zap-search-ai__title">{copy.askAiHeading}</div>
                                            <div className="zap-search-ai__desc">{copy.askAiDescription}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="zap-search-ai__button"
                                            disabled={! canRequestAi}
                                            onClick={requestAiAnswer}
                                        >
                                            {aiLoading && (
                                                <span className="zap-search-ai__spinner" aria-hidden="true" />
                                            )}
                                            <span>{copy.askAiButton}</span>
                                        </button>
                                    </div>
                                    {aiLoading && (
                                        <div className="zap-search-ai__status">
                                            <span className="zap-search-ai__spinner" aria-hidden="true" />
                                            <span>{currentLoadingLabel}</span>
                                        </div>
                                    )}
                                    {! aiLoading && aiAnswer && (
                                        <div
                                            className="zap-search-ai__answer"
                                            dangerouslySetInnerHTML={{__html: aiAnswer}}
                                        />
                                    )}
                                    {! aiLoading && aiError && (
                                        <div className="zap-search-ai__error">{aiError}</div>
                                    )}
                                </div>
                            )}

                            <div className="zap-search-tabs" role="tablist">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        role="tab"
                                        aria-selected={activeTab === tab.key}
                                        className={clsx('zap-search-tab', {
                                            'zap-search-tab-active': activeTab === tab.key,
                                        })}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        <span>{tab.label}</span>
                                        <span className="zap-search-badge">{tab.count}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="zap-search-list">
                                {activeItems.map((item) => (
                                    <a
                                        key={`${item.source}-${item.id}`}
                                        className="zap-search-item"
                                        href={item.url}
                                    >
                                        <div className="zap-search-item-icon">
                                            {renderIcon(item.icon, item.title)}
                                        </div>
                                        <div className="zap-search-item-body">
                                            <div className="zap-search-item-title" dangerouslySetInnerHTML={{__html: item.title}} />
                                            {item.cheapestPrice && (
                                                <div className="zap-search-item-meta">{item.cheapestPrice}</div>
                                            )}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
