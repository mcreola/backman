/*! Built with http://stenciljs.com */
webcomponents.loadBundle("z76oxotn",["exports","./chunk-0316f0e9.js","./chunk-a6d5c435.js"],function(t,e,n){var o=window.webcomponents.h,r=function(){function t(){}return t.prototype.componentWillLoad=function(){this.store=n.getStore(this),this.unsubscribe=n.mapStateToProps(this,this.store,["directionState"]),this.dispatch({type:e.MenuFlyoutActionTypes.setContentEl,contentEl:this.el})},t.prototype.componentDidLoad=function(){this.dispatch({type:e.MenuFlyoutActionTypes.toggleArrowEl,arrowEl:this.arrowEl})},t.prototype.componentDidUnload=function(){this.dispatch({type:e.MenuFlyoutActionTypes.toggleArrowEl,arrowEl:this.arrowEl}),this.dispatch({type:e.MenuFlyoutActionTypes.setContentEl,contentEl:void 0}),this.unsubscribe()},t.prototype.dispatch=function(t){this.store&&this.store.dispatch(t)},t.prototype.hostData=function(){var t;return{class:(t={},t[this.directionState]=!0,t)}},t.prototype.render=function(){var t=this;return o("div",{class:"item"},o("div",{class:"arrow",ref:function(e){return t.arrowEl=e}}),o("div",{class:"body"},o("slot",null)))},Object.defineProperty(t,"is",{get:function(){return"sdx-menu-flyout-content"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{directionState:{state:!0},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-sdx-menu-flyout-content-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-menu-flyout-content, .sc-sdx-menu-flyout-content:after, .sc-sdx-menu-flyout-content:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content{display:none;position:absolute;background-color:#fff;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sc-sdx-menu-flyout-content-h{display:block;position:absolute;top:0;left:0;z-index:60000;-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.2);box-shadow:0 0 4px 0 rgba(0,0,0,.2)}.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .body.sc-sdx-menu-flyout-content{position:relative;background-color:#fff;padding:24px;-webkit-transition:border-bottom .2s cubic-bezier(.4,0,.6,1),color .2s cubic-bezier(.4,0,.6,1);transition:border-bottom .2s cubic-bezier(.4,0,.6,1),color .2s cubic-bezier(.4,0,.6,1)}.sc-sdx-menu-flyout-content-h:not(:last-of-type) > .item.sc-sdx-menu-flyout-content > .body.sc-sdx-menu-flyout-content{border-bottom:1px solid #e4e9ec}.bottom-left.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content, .bottom-right.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content{display:block;top:-7px;-webkit-box-shadow:-1px -1px 2px 0 rgba(0,0,0,.15);box-shadow:-1px -1px 2px 0 rgba(0,0,0,.15)}.top-left.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content, .top-right.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content{display:block;bottom:-7px;-webkit-box-shadow:1px 1px 2px 0 rgba(0,0,0,.15);box-shadow:1px 1px 2px 0 rgba(0,0,0,.15)}"},enumerable:!0,configurable:!0}),t}();t.SdxMenuFlyoutContent=r,Object.defineProperty(t,"__esModule",{value:!0})});