import React from 'react'
import { tabs } from '../data/navigation.json'

export default class Header extends React.PureComponent {
  constructor() {
    super()

    this.state = { openMenu: false }
  }

  toggleMenu = () => this.setState({ openMenu: !this.state.openMenu })

  renderNavigationTabs = () =>
    tabs.map((tab, index) =>
      <li key={ index } className='mr-2 mr-md-3 clickable'>
        <a className="btn t-white" href={ tab.href }>
          <h3 className="heading mb-md-0">{ tab.label }</h3>
        </a>
        <hr className="t-white d-md-none"/>
      </li>
    )

  render() {
    return (
      <div className={ `header${this.state.openMenu ? ' opened' : ''} w-100 t-white d-flex flex-column flex-md-row align-items-md-center py-1 py-md-2 px-3 px-lg-6 pos-fixed pos-top z-11` }>

        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '22px' }}>
          <button
            style={{ lineHeight: '15px' }}
            className="d-md-none pl-3 btn-unstyled pos-absolute pos-left"
            onClick={ this.toggleMenu }>
            <img
              className="d-md-none"
              src={ `/assets/svg/${this.state.openMenu ? 'close' : 'menu'}.svg` }
              alt="storedna logo"
              height="15px" />
          </button>

          <a href="/">
            <img className="d-none d-lg-inline-block mr-md-4" src="/assets/svg/logo_white.svg" alt="storedna logo" height="30px" />
            <img className="d-lg-none mr-md-4" src="/assets/svg/logo_icon_white.svg" alt="storedna logo" height="22px" />
          </a>
        </div>

        <ul className={ `menu ${this.state.openMenu ? 'my-6 mx-4' : 'd-none'} list-unstyled d-md-flex m-md-0` }>
          { this.renderNavigationTabs() }
        </ul>

        <ol className="d-none d-md-flex align-items-center mb-0 ml-auto list-unstyled">
          <li className='mr-2 mr-sm-3 clickable'>
            <a className="t-white" href='logIn'>
              <h3 className="heading mb-md-0">Log in</h3>
            </a>
          </li>
          <li>
            <button className="btn btn-unstyled t-white">Ask for demo</button>
          </li>
        </ol>

      </div>
    )
  }
}
