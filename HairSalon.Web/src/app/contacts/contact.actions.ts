import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateContactAction { constructor(public id, public entity) { } }

export class AllContactsAction { constructor(public id, public entities) { } }

export class RemoveContactAction { constructor(public id, public entity) { } }

export class ContactsFilterAction { constructor(public id, public term) { } }

export class SetCurrentContactAction { constructor(public entity) { } }

export class AddOrUpdateContactSuccessAction { constructor(public entity) { } }

export class CurrentContactRemovedAction { constructor() { } }
