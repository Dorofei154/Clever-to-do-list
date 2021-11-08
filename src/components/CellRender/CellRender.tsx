import { Badge } from 'antd';
import { memo } from 'react';
import { S } from '../../Global.styles';
import { IProps } from './CellRender.types';

const DateCellRenderContainerComponent = ({ value, getListData }: IProps) => {
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

export const DateCellRenderContainer = memo(DateCellRenderContainerComponent);
