

import React from 'react'
import { Badge } from "antd";
import {S} from './CellRender.styles'


const DateCellRenderContainerComponent = (value: moment.Moment, getListData:(value: moment.Moment)=>{ content: string; id: string; }[]) => {
    const listData: { content: string; id: string }[] = getListData(value);
    return (
      <ul>
        {listData.map((item: { content: string; id: string }) => {
          return (
            <S.List key={item.id}>
              <Badge status="warning" text={item.content} />
            </S.List>
          );
        })}
      </ul>
    );
  };

export const DateCellRenderContainer = DateCellRenderContainerComponent;