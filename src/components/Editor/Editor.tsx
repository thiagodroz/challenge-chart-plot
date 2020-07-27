import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import AceEditor from 'react-ace';

import Styles from './Editor.module.scss';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-nord_dark';

const initialCode = `{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862400000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
{type: 'stop', timestamp: 1519862400000}`;

export const Editor: React.FC = () => {
  const [code, setCode] = useState(initialCode);

  return (
    <ResizableBox
      className={Styles.ResizableBox}
      width={Infinity}
      height={200}
      handle={(h) => <span className={Styles.ResizeHandler} />}
      resizeHandles={['s']}
      minConstraints={[Infinity, 100]}
      maxConstraints={[Infinity, Infinity]}
      axis="y"
    >
      <AceEditor
        height="100%"
        width="100%"
        value={code}
        onChange={setCode}
        name="events-editor"
        theme="nord_dark"
        mode="javascript"
        fontSize={14}
      />
    </ResizableBox>
  );
};
