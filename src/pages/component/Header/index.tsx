import React from 'react';
import { Card, message, PageHeader } from 'antd';
import { history } from 'umi';

type propsType = {
  title: string;
  subTitle: string;
};

export default function HeaderContainer(props: propsType) {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => {
          history.goBack();
        }}
        title={props?.title}
        subTitle={props?.subTitle}
      />
    </>
  );
}
