import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdatePhotoAction { constructor(public id, public entity) { } }

export class AllPhotosAction { constructor(public id, public entities) { } }

export class RemovePhotoAction { constructor(public id, public entity) { } }

export class PhotosFilterAction { constructor(public id, public term) { } }

export class SetCurrentPhotoAction { constructor(public entity) { } }

export class AddOrUpdatePhotoSuccessAction { constructor(public entity) { } }

export class CurrentPhotoRemovedAction { constructor() { } }
