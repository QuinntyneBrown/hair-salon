import { WhatsNewComponent } from './whats-new.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('WhatsNewComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(WhatsNewComponent).then(fixture => {
                expect(fixture.componentInstance instanceof WhatsNewComponent).toBe(true, 'should create WhatsNewComponent');
            });
        })));    
});
