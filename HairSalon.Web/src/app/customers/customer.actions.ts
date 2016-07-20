import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateCustomerAction { constructor(public id, public entity) { } }

export class AllCustomersAction { constructor(public id, public entities) { } }

export class RemoveCustomerAction { constructor(public id, public entity) { } }

export class CustomersFilterAction { constructor(public id, public term) { } }

export class SetCurrentCustomerAction { constructor(public entity) { } }

export class AddOrUpdateCustomerSuccessAction { constructor(public entity) { } }

export class CurrentCustomerRemovedAction { constructor() { } }
