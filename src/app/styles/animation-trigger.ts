import { animate, group, state, style, transition, trigger } from "@angular/animations";

export const fade = trigger('fade', [
    transition(':enter', [
        style({ 'opacity': ' 0' }),
        animate('100ms ease-in-out', style({
            opacity: '0'
        })),
        animate('200ms ease-in-out', style({
            'opacity': '1'
        }))
    ]),

    transition(':leave', [
        animate('0ms', style({ 'opacity': '0' }))
    ])
])

export const rotate = trigger('rotate', [
    state('void', style({
        'transform': 'rotate(0deg)'
    })),
    state('*', style({
        'transform': 'rotate(5deg)'
    })),

    transition('* <=> void', animate('50ms'))
]);