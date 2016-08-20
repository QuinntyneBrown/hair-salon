import { HomeComponent } from './home.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('HomeComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(HomeComponent).then(fixture => {
                expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
            });
        })));    
});
