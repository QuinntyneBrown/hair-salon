import { ScheduleComponent } from './schedule.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('ScheduleComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(ScheduleComponent).then(fixture => {
                expect(fixture.componentInstance instanceof ScheduleComponent).toBe(true, 'should create ScheduleComponent');
            });
        })));    
});
