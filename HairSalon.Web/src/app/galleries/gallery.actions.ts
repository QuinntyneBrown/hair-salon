import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateGalleryAction { constructor(public id, public entity) { } }

export class AllGallerysAction { constructor(public id, public entities) { } }

export class RemoveGalleryAction { constructor(public id, public entity) { } }

export class GallerysFilterAction { constructor(public id, public term) { } }

export class SetCurrentGalleryAction { constructor(public entity) { } }

export class AddOrUpdateGallerySuccessAction { constructor(public entity) { } }

export class CurrentGalleryRemovedAction { constructor() { } }
