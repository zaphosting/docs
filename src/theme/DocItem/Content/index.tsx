import React from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useDoc } from '@docusaurus/theme-common/internal';
import AssociatedServicesList from '../../AssociatedServicesList';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): JSX.Element {
  const { frontMatter } = useDoc();

  function hasAssociatedServices() {
    return frontMatter.hasOwnProperty('services')
      && Array.isArray(frontMatter.services)
      && frontMatter.services.length > 0;
  }

  return (
    <>
      {hasAssociatedServices() === true &&
        <AssociatedServicesList services={frontMatter.services} />
      }
      <Content {...props} />
    </>
  );
}
