import { ContactComponent } from './contact.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('ContactComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(ContactComponent).then(fixture => {
                expect(fixture.componentInstance instanceof ContactComponent).toBe(true, 'should create ContactComponent');
            });
        })));    
});
