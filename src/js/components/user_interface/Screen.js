import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load'
import ActionBoard from './ActionBoard.js';
import Opportunities from './Opportunities.js'
import KnowledgeCenter from './KnowledgeCenter.js'
import { S3_BUCKET_URL, isMobile } from '../../utils'

export default class Screen extends React.PureComponent {
  renderVideo() {
    if (isMobile()) {
      return (
        <img src="/assets/images/3D_heatmap.png" alt="3D heatmap" width="100%" />
      );
    }

    return (
      <LazyLoad offsetVertical={ 300 } debounce={ false }>
        <video
          muted playsInline autoPlay loop
          poster="/assets/images/3D_heatmap.png"
          className="interface-video pos-relative pos-h-center"
          src={ S3_BUCKET_URL + "/assets/video/3D_heatmap.mp4" } />
      </LazyLoad>
    );
  }

  renderOpportunities() {
    return (
      <Opportunities { ...this.props } />
    );
  }

  renderActionBoard() {
    return (
      <ActionBoard data={ this.props.data } key={ this.props.data.name } />
    );
  }

  renderKnowledgeCenter() {
    return (
      <KnowledgeCenter data={ this.props.data } />
    );
  }

  render() {
    const { onClick } = this.props;
    const { tab } = this.props.data;

    return (
      <div className="macbook--screen">
        <div className="screen--interface bg-white w-100 h-100 o-hidden">
          <div className="interface-header w-100 bg-brand t-white d-flex py-md-1 px-1 px-md-2 t-5">
            <img className="interface-header-logo mr-2 mr-sm-3" src="/assets/svg/logos/logo_icon_white.svg" alt="storedna logo" />
            <ul className="interface-header-tabs d-none d-sm-inline-block d-sm-flex list-unstyled mb-0 mt-sm-1">
              <li className={ `mr-2 mr-sm-3 interface-header-tab clickable ${tab === 'opportunities' ? ' active' : ''}` } onClick={ onClick.bind(this,'fleet') }>Opportunities</li>
              <li className={ `mr-2 mr-sm-3 interface-header-tab clickable ${tab === 'actionboard' ? ' active' : ''}` } onClick={ onClick.bind(this,'test') }>ActionBoard</li>
              <li className={ `mr-2 mr-sm-3 interface-header-tab clickable ${tab === 'knowledge' ? ' active' : ''}` } onClick={ onClick.bind(this,'scale') }>Knowledge Center</li>
              <li className={ `interface-header-tab clickable ${tab === 'video' ? ' active' : ''}` } onClick={ onClick.bind(this,'video') }>Visual Insights</li>
            </ul>
          </div>
          { tab === 'video' ? this.renderVideo() : tab === 'opportunities' ? this.renderOpportunities() :  tab === 'actionboard' ? this.renderActionBoard() : this.renderKnowledgeCenter() }
        </div>
      </div>
    );
  }
}

Screen.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
