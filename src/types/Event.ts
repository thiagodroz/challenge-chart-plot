interface BaseEvent {
  readonly type: 'start' | 'span' | 'data' | 'stop';
  readonly timestamp: number;
}

interface StartEvent extends BaseEvent {
  readonly type: 'start';
  readonly select: string[];
  readonly group: string[];
}

interface SpanEvent extends BaseEvent {
  readonly type: 'span';
  readonly begin: number;
  readonly end: number;
}

interface DataEvent extends BaseEvent {
  readonly type: 'data';
}

interface StopEvent extends BaseEvent {
  readonly type: 'stop';
}

export type Event = StartEvent | SpanEvent | DataEvent | StopEvent;
