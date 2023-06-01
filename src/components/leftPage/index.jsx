import React, { PureComponent } from 'react';
import { LeftPage, LeftTopBox, LeftBottomBox } from './style';
import { ModuleTitle } from '../../style/globalStyledSet';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import UserSituation from './charts/UserSituation';
import { connect } from 'dva';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userSitua, trafficSitua, accessFrequency, peakFlow } = this.props;
    return (
      <LeftPage>
        {/* 顶部图表 */}
        <LeftTopBox>
          <BorderBox12 className='left-top-borderBox12'>
            <div className='left-top'>
              <ModuleTitle>
                <i className='iconfont'>&#xe78f;</i>
                <span>全国居民人均可支配收入</span>
              </ModuleTitle>
              <div className='title-dis'>
                <span>
                  总绝对量:
                  <span className='title-dis-keyword'>{accessFrequency}千元</span>
                </span>
                <span>
                  同比增长:
                  <span className='title-dis-keyword'>{peakFlow}%</span>
                </span>
              </div>
              {/* 图表 */}
              <TrafficSituation trafficSitua={trafficSitua}></TrafficSituation>
            </div>
          </BorderBox12>
        </LeftTopBox>

        {/* 底部图表 */}
        <LeftBottomBox>
          <BorderBox13 className='left-bottom-borderBox13'>
            <div className='left-bottom'>
              <ModuleTitle>
                <i className='iconfont'>&#xe88e;</i>
                <span>全国各省GDP排行</span>
              </ModuleTitle>
              {/* 图表 */}
              <UserSituation userSitua={userSitua}></UserSituation>
            </div>
          </BorderBox13>
        </LeftBottomBox>
      </LeftPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessFrequency: state.leftPage.accessFrequency,
    peakFlow: state.leftPage.peakFlow,
    userSitua: state.leftPage.userSitua,
    trafficSitua: state.leftPage.trafficSitua,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
