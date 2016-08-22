import { HeroComponent } from './hero.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('HeroComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(HeroComponent).then(fixture => {
                expect(fixture.componentInstance instanceof HeroComponent).toBe(true, 'should create HeroComponent');
            });
        })));    
});
