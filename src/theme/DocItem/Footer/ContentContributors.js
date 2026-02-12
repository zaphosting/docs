import React, { useState, useEffect } from 'react';
import { getContributors } from './contributors';
import styles from './contributors.module.css';
import Translate from '@docusaurus/Translate';

// =============================================================================
// Constants
// =============================================================================

const ZAP_TEAM_MEMBERS = new Map([
    ['fgalz', 'ZAP-Hosting'],
    ['ThatGuyJacobee', 'ZAP-Hosting'],
    ['Blumlaut', 'ZAP-Hosting'],
    ['zapaul', 'ZAP-Hosting'],
    ['OfficialSkypo', 'ZAP-Hosting'],
    ['CraZyFl3X', 'ZAP-Hosting'],
    ['JustADima', 'ZAP-Hosting'],
    ['fbigrs', 'ZAP-Hosting'],
    ['danymo1221', 'ZAP-Hosting'],
    ['frank-zap', 'ZAP-Hosting'],
    ['RugileZAP', 'ZAP-Hosting'],
    ['ItsPaulAT', 'ZAP-Hosting'],
]);

const CONTRIBUTION_PROGRAM_URL = 'https://zap-hosting.com/guides/docs/contribution-introduction/';

// =============================================================================
// SVG Icons
// =============================================================================

const LightbulbIcon = () => (
    <svg className={styles.timelineIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
    </svg>
);

const CheckmarkIcon = () => (
    <svg className={styles.timelineIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </svg>
);

const EditIcon = () => (
    <svg className={styles.timelineIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
);

const MoneyIcon = () => (
    <svg className={styles.timelineIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="10" rx="1" fill="currentColor" opacity="0.9"/>
        <rect x="3" y="7" width="18" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="5" y1="9" x2="6.5" y2="9" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="5" y1="15" x2="6.5" y2="15" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="17.5" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="17.5" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
);

// =============================================================================
// Contribution Call-to-Action Component
// =============================================================================

const ContributionCTA = () => (
    <div className={styles.contributionCTA}>
        <h3>
            <Translate id="contributors.cta.title">
                Become a ZAP-Hosting Contributor!
            </Translate>
        </h3>
        <p>
            <Translate 
                id="contributors.cta.description"
                values={{
                    contributionLink: (
                        <a href={CONTRIBUTION_PROGRAM_URL} className={styles.ctaLink}>
                            Contribution Program
                        </a>
                    ),
                    highlight: (chunks) => <span className={styles.highlight}>{chunks}</span>,
                }}
            >
                {'Join our {contributionLink} and share your expertise with the community! Create and earn rewards. Your knowledge helps thousands of users. Start contributing today!'}
            </Translate>
        </p>
    </div>
);

// =============================================================================
// Contribution Timeline Component
// =============================================================================

const ContributionTimeline = () => (
    <div className={styles.timeline}>
        <a href={CONTRIBUTION_PROGRAM_URL} className={styles.timelineBoxLink}>
            <div className={styles.timelineBox}>
                <div className={styles.timelineContainer}>
                    {/* Step 1: Suggestion */}
                    <div className={styles.timelineStep}>
                        <div className={styles.timelineIconWrapper}>
                            <LightbulbIcon />
                            <span className={styles.timelineStepNumber}>1</span>
                        </div>
                        <div className={styles.timelineStepTitle}>
                            <Translate id="contributors.timeline.step1.title">
                                Suggestion
                            </Translate>
                        </div>
                        <div className={styles.timelineStepDescription}>
                            <Translate id="contributors.timeline.step1.description">
                                Share your guide idea via the GitHub Suggestion Form.
                            </Translate>
                        </div>
                    </div>

                    {/* Step 2: Approval */}
                    <div className={styles.timelineStep}>
                        <div className={styles.timelineIconWrapper}>
                            <CheckmarkIcon />
                            <span className={styles.timelineStepNumber}>2</span>
                        </div>
                        <div className={styles.timelineStepTitle}>
                            <Translate id="contributors.timeline.step2.title">
                                Approval
                            </Translate>
                        </div>
                        <div className={styles.timelineStepDescription}>
                            <Translate id="contributors.timeline.step2.description">
                                Get feedback & approval to your suggestion within a few days
                            </Translate>
                        </div>
                    </div>

                    {/* Step 3: Write Content */}
                    <div className={styles.timelineStep}>
                        <div className={styles.timelineIconWrapper}>
                            <EditIcon />
                            <span className={styles.timelineStepNumber}>3</span>
                        </div>
                        <div className={styles.timelineStepTitle}>
                            <Translate id="contributors.timeline.step3.title">
                                Write Content
                            </Translate>
                        </div>
                        <div className={styles.timelineStepDescription}>
                            <Translate id="contributors.timeline.step3.description">
                                Create high-quality content following our guidelines
                            </Translate>
                        </div>
                    </div>

                    {/* Step 4: Earn Rewards */}
                    <div className={styles.timelineStep}>
                        <div className={styles.timelineIconWrapper}>
                            <MoneyIcon />
                            <span className={styles.timelineStepNumber}>4</span>
                        </div>
                        <div className={styles.timelineStepTitle}>
                            <Translate id="contributors.timeline.step4.title">
                                Earn Rewards
                            </Translate>
                        </div>
                        <div className={styles.timelineStepDescription}>
                            <Translate id="contributors.timeline.step4.description">
                                Get paid for your approved contribution. Earn up to 130€!
                            </Translate>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
);

// =============================================================================
// Contributors List Component
// =============================================================================

const ContributorsList = ({ contributors }) => (
    <div className={styles.contributorsSection}>
        <h4>
            <Translate id="contributors.document.title">
                Contributors to this content
            </Translate>
        </h4>
        <ul className={styles.wrapper}>
            {contributors?.map((contributor) => {
                const isZapTeam = ZAP_TEAM_MEMBERS.has(contributor.login);
                const name = isZapTeam
                    ? `${contributor.login}, ${ZAP_TEAM_MEMBERS.get(contributor.login)}`
                    : contributor.login;
                
                return (
                    <li key={contributor.login} className={styles.contributor}>
                        <a
                            href={contributor.html_url}
                            className={isZapTeam ? styles.zapTeam : ''}
                            title={`@${name}`}
                        >
                            <img
                                src={contributor.avatar_url}
                                alt={contributor.login}
                                width={70}
                            />
                        </a>
                    </li>
                );
            })}
        </ul>
    </div>
);

// =============================================================================
// Main Component
// =============================================================================

const ContentContributors = ({ owner, repo, filePath, additionalContributors }) => {
    const [contributors, setContributors] = useState([]);
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}`;

    useEffect(() => {
        const fetchFileContributors = () => {
            fetch(apiUrl)
                .then((response) => response.json())
                .then((commits) => {
                    const contributorsList = getContributors(commits);

                    // Sort: ZAP team members first
                    contributorsList.sort((a, b) => {
                        if (ZAP_TEAM_MEMBERS.has(a.login)) {
                            return -1;
                        }
                        return 1;
                    });

                    setContributors(contributorsList);
                })
                .catch((error) => {
                    console.error('Error fetching contributors:', error);
                    setContributors([]);
                });
        };
        
        fetchFileContributors();
    }, [apiUrl, additionalContributors]);

    // Don't render if no contributors
    if (!contributors.length) {
        return null;
    }

    return (
        <div className={styles.contributors}>
            <hr />
            <ContributionCTA />
            <ContributionTimeline />
            <ContributorsList contributors={contributors} />
        </div>
    );
};

export default ContentContributors;
