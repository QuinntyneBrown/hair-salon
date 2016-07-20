import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateHairStylistAction { constructor(public id, public entity) { } }

export class AllHairStylistsAction { constructor(public id, public entities) { } }

export class RemoveHairStylistAction { constructor(public id, public entity) { } }

export class HairStylistsFilterAction { constructor(public id, public term) { } }

export class SetCurrentHairStylistAction { constructor(public entity) { } }

export class AddOrUpdateHairStylistSuccessAction { constructor(public entity) { } }

export class CurrentHairStylistRemovedAction { constructor() { } }
