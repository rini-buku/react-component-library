(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{400:function(module,exports,__webpack_require__){__webpack_require__(401),__webpack_require__(771),module.exports=__webpack_require__(770)},469:function(module,exports){},771:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(180),public_api=(__webpack_require__(48),__webpack_require__(6),__webpack_require__(16),__webpack_require__(20),__webpack_require__(564),__webpack_require__(120)),dist_esm=__webpack_require__(18);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var getStoryData=function getStoryData(api){try{var storyData=api.getCurrentStoryData();return console.log(storydata,"xxxstorydata"),storyData}catch(e){return null}};public_api.a.register("TitleAddon",(function(api){var cunstomTitle="Sachet - Web Component Library by BukuWarung",interval=null,setTitle=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var storyData,title;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return clearTimeout(interval),_context.next=3,getStoryData(api);case 3:storyData=_context.sent,console.log(storyData,"xx1"),title=storyData?"".concat(storyData.kind," - ").concat(storyData.name," ⋅ ").concat(cunstomTitle):cunstomTitle,document.title!==title&&(document.title=title),interval=setTimeout(setTitle,100);case 8:case"end":return _context.stop()}}),_callee)})));return function setTitle(){return _ref.apply(this,arguments)}}();setTitle(),api.on(dist_esm.STORY_RENDERED,(function(){setTitle()}))}));var create=__webpack_require__(185),react_component_library=Object(create.a)({base:"light",brandTitle:"react-component-library",brandUrl:"https://rini-buku.github.io/react-component-library/",brandImage:"https://bukuwarung.com/wp-content/uploads/2022/03/logo-bw-ds-xl.png",fontBase:'"Roboto", sans-serif'});esm.a.setConfig({theme:react_component_library})}},[[400,2,3]]]);