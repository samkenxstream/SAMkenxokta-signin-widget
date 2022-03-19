import Backbone from 'backbone';
export interface RouterOptions extends Backbone.HistoryOptions {
    el?: HTMLElement | string;
}
interface BaseRouterPublic {
    listen(name: any, fn: any): Backbone.View;
    start(): any;
    unload(): any;
    render(Controller: any, options: any): any;
    route(route: string | RegExp, name: string, callback?: Backbone.RouterCallback): this;
    route(route: string | RegExp, callback: Backbone.RouterCallback): this;
    navigate(fragment: string, options?: Backbone.NavigateOptions | boolean): this;
}
export interface BaseRouterInterface extends BaseRouterPublic, Backbone.Router {
}
export interface BaseRouterConstructor {
    new (options: any): BaseRouterInterface;
    extend(properties: any, classProperties?: any): any;
}
declare const constructor: BaseRouterConstructor;
export default constructor;
