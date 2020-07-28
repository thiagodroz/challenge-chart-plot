import React from 'react';
import { ResizableBox } from 'react-resizable';
import AceEditor from 'react-ace';

import { useCodeContext } from 'contexts/CodeContext';

import Styles from './Editor.module.scss';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-nord_dark';

export const Editor: React.FC = () => {
  const { code, setCode } = useCodeContext();

  return (
    <ResizableBox
      className={Styles.ResizableBox}
      width={Infinity}
      height={200}
      handle={() => <span className={Styles.ResizeHandler} />}
      resizeHandles={['s']}
      minConstraints={[Infinity, 100]}
      maxConstraints={[Infinity, 400]}
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
