import React, { PureComponent } from 'react';
import { userOptions } from './options';
import { ScrollBoard, ScrollRankingBoard } from '@jiaminghi/data-view-react';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 单位
        unit: '万亿',
        // 表行数
        rowNum: 10,
      },
    };
  }

  render() {
    const { userSitua } = this.props;
    const config = {
      ...this.state.config,
      ...userOptions(userSitua),
    };

    return (
      <div>
        {userSitua ? (
          <ScrollRankingBoard
            config={config}
            style={{
              width: '5.475rem',
              height: '6.875rem',
            }}></ScrollRankingBoard>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default UserSituation;
