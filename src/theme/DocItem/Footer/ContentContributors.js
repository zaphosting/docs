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
            <ContributorsList contributors={contributors} />
        </div>
    );
};

export default ContentContributors;
