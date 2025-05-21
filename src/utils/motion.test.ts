import { describe, it, expect } from 'vitest';
import { fadeIn } from './motion';

describe('fadeIn', () => {
  it('should return correct animation variants for "left" direction', () => {
    const direction = "left";
    const type = "spring";
    const delay = 0.5;
    const duration = 0.75;

    const variants = fadeIn(direction, type, delay, duration);

    expect(variants.hidden.x).toBe(100);
    expect(variants.hidden.y).toBe(0);
    expect(variants.hidden.opacity).toBe(0);

    expect(variants.show.x).toBe(0);
    expect(variants.show.y).toBe(0);
    expect(variants.show.opacity).toBe(1);
    expect(variants.show.transition.type).toBe(type);
    expect(variants.show.transition.delay).toBe(delay);
    expect(variants.show.transition.duration).toBe(duration);
    expect(variants.show.transition.ease).toBe("easeOut");
  });

  it('should return correct animation variants for "right" direction', () => {
    const direction = "right";
    const type = "tween";
    const delay = 0.3;
    const duration = 0.6;

    const variants = fadeIn(direction, type, delay, duration);

    expect(variants.hidden.x).toBe(-100);
    expect(variants.hidden.y).toBe(0);
    expect(variants.hidden.opacity).toBe(0);

    expect(variants.show.x).toBe(0);
    expect(variants.show.y).toBe(0);
    expect(variants.show.opacity).toBe(1);
    expect(variants.show.transition.type).toBe(type);
    expect(variants.show.transition.delay).toBe(delay);
    expect(variants.show.transition.duration).toBe(duration);
    expect(variants.show.transition.ease).toBe("easeOut");
  });

  it('should return correct animation variants for "up" direction', () => {
    const direction = "up";
    const type = "tween";
    const delay = 0.2;
    const duration = 0.5;

    const variants = fadeIn(direction, type, delay, duration);

    expect(variants.hidden.x).toBe(0);
    expect(variants.hidden.y).toBe(100);
    expect(variants.hidden.opacity).toBe(0);

    expect(variants.show.x).toBe(0);
    expect(variants.show.y).toBe(0);
    expect(variants.show.opacity).toBe(1);
    expect(variants.show.transition.type).toBe(type);
    expect(variants.show.transition.delay).toBe(delay);
    expect(variants.show.transition.duration).toBe(duration);
    expect(variants.show.transition.ease).toBe("easeOut");
  });

  it('should return correct animation variants for "down" direction', () => {
    const direction = "down";
    const type = "spring";
    const delay = 0.7;
    const duration = 0.9;

    const variants = fadeIn(direction, type, delay, duration);

    expect(variants.hidden.x).toBe(0);
    expect(variants.hidden.y).toBe(-100);
    expect(variants.hidden.opacity).toBe(0);

    expect(variants.show.x).toBe(0);
    expect(variants.show.y).toBe(0);
    expect(variants.show.opacity).toBe(1);
    expect(variants.show.transition.type).toBe(type);
    expect(variants.show.transition.delay).toBe(delay);
    expect(variants.show.transition.duration).toBe(duration);
    expect(variants.show.transition.ease).toBe("easeOut");
  });

  it('should return default hidden values if direction is empty', () => {
    const direction = "";
    const type = "spring";
    const delay = 0.5;
    const duration = 0.75;

    const variants = fadeIn(direction, type, delay, duration);

    expect(variants.hidden.x).toBe(0); // Default x when direction is empty
    expect(variants.hidden.y).toBe(0); // Default y when direction is empty
    expect(variants.hidden.opacity).toBe(0);

    expect(variants.show.x).toBe(0);
    expect(variants.show.y).toBe(0);
    expect(variants.show.opacity).toBe(1);
    expect(variants.show.transition.type).toBe(type);
    expect(variants.show.transition.delay).toBe(delay);
    expect(variants.show.transition.duration).toBe(duration);
    expect(variants.show.transition.ease).toBe("easeOut");
  });
});
