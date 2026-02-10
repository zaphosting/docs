
import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import ContentContributors from './ContentContributors';
import GitUrlParse from 'git-url-parse';

const FooterWrapper = (props) => {
  const { metadata } = useDoc();
  const file = metadata.editUrl;
  const additionalContributors = metadata.frontMatter.additionalContributors;

  if (!file) {
      return <Footer {...props} />;
  }

  const info = GitUrlParse(file);
  const { name, owner, filepath } = info;

  return (
      <>
        <ContentContributors repo={name} owner={owner} filePath={filepath} additionalContributors={additionalContributors}/>
        <Footer {...props} />
      </>
  );
};

export default FooterWrapper;
