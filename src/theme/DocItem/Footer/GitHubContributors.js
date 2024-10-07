import React, { useState, useEffect } from 'react';
import { getContributors } from './contributors';
import styles from './contributors.module.css';
import Translate from '@docusaurus/Translate';

const zapTeam = new Map([
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
]);


const GitHubContributors = ({ owner, repo, filePath, additionalContributors }) => {
    const [contributors, setContributors] = useState([]);
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}`;

    useEffect(() => {
        const fetchFileContributors = () => {
            fetch(url)
                .then((response) => response.json())
                .then((commits) => {
                    const contributors = getContributors(commits);

                    contributors.sort((a, b) => {
                        if (zapTeam.has(a.login)) {
                            return -1;
                        }
                        return 1;
                    });

                    setContributors(contributors);
                })
                .catch((error) => {
                    console.error(error);
                    setContributors([]);
                });
        };
        fetchFileContributors();
    }, [url, additionalContributors]);

    if (!contributors.length) {
        return null;
    }

    return (
        <div className={styles.contributors}>
            <hr></hr>
            <h2>
                <Translate id="contributors.title">
                    Contributor(s)
                </Translate>
            </h2>
            <p>
                <Translate id="contributors.description"
                values={{
                    contributionLink: (
                        <a href="contribution-introduction">
                            Contribution Program
                        </a>
                    ),
                }}>
                {
                    'Become part of the ZAP-Hosting community - Join our {contributionLink}, share your knowledge by writing guides and earn valuable rewards. Start today and make a difference!🙂'
                }
                </Translate>
            </p>
            <ul className={styles.wrapper}>
                {contributors?.map((contributor) => {
                    const iszapTeam = zapTeam.has(contributor.login);
                    const name = iszapTeam
                        ? `${contributor.login}, ${zapTeam.get(
                              contributor.login,
                          )}`
                        : contributor.login;
                    return (
                        <li
                            key={contributor.login}
                            className={styles.contributor}
                        >
                            <a
                                href={contributor.html_url}
                                className={iszapTeam ? styles.zapTeam : ''}
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
};

export default GitHubContributors;
