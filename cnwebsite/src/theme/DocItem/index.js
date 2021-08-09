/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import Seo from '@theme/Seo';
import LastUpdated from '@theme/LastUpdated';
import TOC from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';
import {MainHeading} from '@theme/Heading';
import IconEdit from '@theme/IconEdit';
import clsx from 'clsx';
import styles from './styles.module.css';
import {
  useActivePlugin,
  useVersions,
  useActiveVersion,
} from '@theme/hooks/useDocs';
// import DocsRating from '../../../core/DocsRating';

function SponsorHeader() {
  return (
    <a
      href="https://t.1yb.co/y4lL"
      target="_blank"
      style={{
        display: 'block',
        padding: 12,
        backgroundColor: '#eee',
        color: '#666',
        marginBottom: 15,
      }}>
      <span style={{fontWeight: 'bold', color: '#05a5d1'}}>前端工程化实战</span>{' '}
      深入学习一线大厂必备前端技能，VIP 课程免费领取{' '}
      <span
        style={{
          border: 'solid 1px #666',
          padding: '4px 6px',
          marginLeft: 8,
          verticalAlign: 'middle',
        }}>
        立即查看 &gt;
      </span>
    </a>
  );
}

function DocItem(props) {
  const {content: DocContent, versionMetadata} = props;
  const {metadata, frontMatter} = DocContent;
  const {
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const {
    description,
    title,
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    // unversionedId,
  } = metadata;
  const {pluginId} = useActivePlugin({
    failfast: true,
  });
  const versions = useVersions(pluginId);
  const activeVersion = useActiveVersion(pluginId);
  const showVersionBadge = versions.length > 1 && !activeVersion.isLast;

  const shouldAddTitle =
    !hideTitle && typeof DocContent.contentTitle === 'undefined';

  return (
    <>
      <Seo
        {...{
          title,
          description,
          keywords,
          image,
        }}
      />
      <div className="row">
        <div
          className={clsx('col', {
            [styles.docItemCol]: !hideTableOfContents,
          })}>
          <DocVersionBanner versionMetadata={versionMetadata} />
          <div className={styles.docItemContainer}>
            <article>
              {showVersionBadge && (
                <div>
                  <span className="badge badge--secondary">
                    版本: {versionMetadata.label}
                  </span>
                </div>
              )}
              <SponsorHeader />
              <div className="markdown">
                {/*
                Title can be declared inside md content or declared through frontmatter and added manually
                To make both cases consistent, the added title is added under the same div.markdown block
                See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120
                */}
                {shouldAddTitle && <MainHeading>{title}</MainHeading>}
                <DocContent />
              </div>
              {/* <DocsRating label={unversionedId} /> */}
              {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
                <footer className="docMetadata row docusaurus-mt-lg">
                  <div className="col">
                    {editUrl && <EditThisPage editUrl={editUrl} />}
                  </div>
                  <div className={clsx('col', styles.lastUpdated)}>
                    {(lastUpdatedAt || lastUpdatedBy) && (
                      <LastUpdated
                        lastUpdatedAt={lastUpdatedAt}
                        formattedLastUpdatedAt={formattedLastUpdatedAt}
                        lastUpdatedBy={lastUpdatedBy}
                      />
                    )}
                  </div>
                </footer>
              )}
            </article>
            <DocPaginator metadata={metadata} />
          </div>
        </div>
        {!hideTableOfContents && DocContent.toc && (
          <div className="col col--3">
            <TOC toc={DocContent.toc} />
          </div>
        )}
      </div>
    </>
  );
}

export default DocItem;
