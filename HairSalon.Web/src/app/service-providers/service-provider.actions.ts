import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateServiceProviderAction { constructor(public id, public entity) { } }

export class AllServiceProvidersAction { constructor(public id, public entities) { } }

export class RemoveServiceProviderAction { constructor(public id, public entity) { } }

export class ServiceProvidersFilterAction { constructor(public id, public term) { } }

export class SetCurrentServiceProviderAction { constructor(public entity) { } }

export class AddOrUpdateServiceProviderSuccessAction { constructor(public entity) { } }

export class CurrentServiceProviderRemovedAction { constructor() { } }
