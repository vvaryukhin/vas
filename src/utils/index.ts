export type AnyFunction = (...args: any[]) => any;

interface DebouncedFunction<T extends AnyFunction> {
  (...args: Parameters<T>): void;
  cancel: () => void;
}

export function debounce<T extends AnyFunction>(ms: number, fn: T) {
  let timeoutId: number | null = null;
  const cancel = () => isNumber(timeoutId) && clearTimeout(timeoutId);
  const debounced: DebouncedFunction<T> = function (...args) {
    cancel();
    timeoutId = window.setTimeout(() => {
      fn.apply(null, args);
    }, ms);
  };
  debounced.cancel = cancel;
  return debounced;
}

let count = 0;
export const uid = () => ++count;

export function isNumber(val: unknown): val is number {
  return typeof val === "number";
}

export function isString(val: unknown): val is string {
  return typeof val === "string";
}

export function isFunction(val: unknown): val is AnyFunction {
  return typeof val === "function";
}

export function getByRole(role: string) {
  return document.querySelector(`[data-role="${role}"]`);
}

type ObjectWithLength = { [key: number]: any; length: number };
type NumberKeys<T extends Record<PropertyKey, any>> = Extract<keyof T, number>;

export function last<T extends ObjectWithLength>(val: T): T[NumberKeys<T>] {
  return val[val.length - 1];
}

interface IRenderOptions {
  attributes?: Record<string, string>;
  classNames?: string[];
  dataset?: Record<string, string>;
  style?: Record<string, string>;
}

export function render<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options?: IRenderOptions,
  children?: Array<HTMLElement | string>
): HTMLElementTagNameMap[K];
export function render(
  tagName: string,
  { attributes, classNames, dataset, style }: IRenderOptions = {},
  children: Array<HTMLElement | string> = []
): HTMLElement {
  const el = document.createElement(tagName);
  children.forEach(child => {
    appendChild(el, child);
  });
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }
  if (classNames) {
    classNames.forEach(value => {
      el.classList.add(value);
    });
  }
  if (dataset) {
    Object.entries(dataset).forEach(([key, value]) => {
      el.dataset[key] = value;
    });
  }
  if (style) {
    Object.entries(style).forEach(([key, value]) => {
      el.style[key as any] = value;
    });
  }
  return el;
}

export function appendChild(parent: Node, child: string | Node) {
  if (isString(child)) {
    return parent.appendChild(document.createTextNode(child));
  }
  return parent.appendChild(child);
}
