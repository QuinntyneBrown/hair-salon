import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";
import { toPageListFromInMemory } from "angular-rx-ui/src/components/paged-list/to-paged-list-from-in-memory";
import { IPagedList } from "angular-rx-ui/src/components/paged-list/ipaged-list.d";
import { Gallery } from "../galleries/gallery.model";
import { Photo } from "../photos/photo.model";

@Component({
    template: require("./galleries-page.component.html"),
    styles: [require("./galleries-page.component.scss")],
    selector: "galleries-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleriesPageComponent {
    storeOnChange = state => {
        if (state.app) {
            this.galleriesPageHeroImageUrl = state.app.galleriesPageHeroImageUrl;
            this.mainGallery = state.app.mainGallery;
        }
    }

    public galleriesPageHeroImageUrl: string;
    public mainGallery: Gallery;
    
    ngOnInit = () => {
        this.pagedList = toPageListFromInMemory<any>(this.mainGallery.photos, this.pageNumber, this.pageSize)
    };

    entities: Array<Photo>;
    pagedList: IPagedList<Photo>;
    pageNumber: number = 1;
    pageSize: number = 1

    next = () => {
        if (this.pageNumber == this.pagedList.totalPages) {
            this.pageNumber = 1;
        } else {
            this.pageNumber = this.pageNumber + 1;
        }
        this.ngOnInit();
    }

    previous = () => {
        if (this.pageNumber == 1) {
            this.pageNumber = this.pagedList.totalPages;
        } else {
            this.pageNumber = this.pageNumber - 1;
        }
        this.ngOnInit();
    }
}
