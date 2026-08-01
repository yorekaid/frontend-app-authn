import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import illustration from './assets/illustration.png';
import messages from './messages';
import './index.scss';

const SplitIllustrationLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-50 split-illustration-layout">
      <div className="decoration-circle" />
      <div className="decoration-circle-small" />

      <div className="split-illustration__content">
        <h1 className="split-illustration__heading">
          {formatMessage(messages['split.layout.heading.part1'])}
          <span className="text-orange">{formatMessage(messages['split.layout.heading.part2'])}</span>
          {formatMessage(messages['split.layout.heading.part3'])}
          <span className="text-orange">{formatMessage(messages['split.layout.heading.part4'])}</span>
          {formatMessage(messages['split.layout.heading.part5'])}
        </h1>
      </div>


    </div>
  );
};

export default SplitIllustrationLayout;
