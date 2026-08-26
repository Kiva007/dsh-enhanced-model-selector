window.__ModuleLoader__.load({ id: "dsh-enhanced-model-selector", factory: (require) => {
var module = { exports: {} };
var exports = module.exports;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var _react = require("react");
var _cordis = require("@deepseek-ai/cordis");

var FALLBACK = {
  'trigger.fallback': 'Select model',
  'trigger.selectAria': 'Select model',
  'trigger.aria': 'Select model, current {model}',
  'trigger.ariaEffort': 'Select model, current {model}, reasoning effort {effort}',
  'menu.aria': 'Model and reasoning effort',
  'menu.model': 'Model',
  'menu.effort': 'Effort',
  'effort.providerDefault': 'Default',
  'status.loading': 'Refreshing model list…',
  'error.action': 'Model operation failed: {message}',
  'action.reload': 'Reload',
  'warning.groupLoad': '{name} failed to load: {message}',
  'empty.models': 'No models available.',
  'empty.efforts': 'This model provides no reasoning effort levels.',
  'retry': 'Retry',
  'filter.all': 'All',
  'filter.title': 'Provider'
};

function cx() {
  var parts = [];
  for (var i = 0; i < arguments.length; i++) {
    var a = arguments[i];
    if (typeof a === 'string' && a) parts.push(a);
    else if (a && typeof a === 'object' && !Array.isArray(a)) {
      for (var k in a) if (a[k]) parts.push(k);
    }
  }
  return parts.join(' ');
}

function IcoChevronDown(p) {
  return _react.createElement('svg', Object.assign({ viewBox: '0 0 14 14', width: 14, height: 14, 'aria-hidden': true }, p),
    _react.createElement('path', { d: 'M3 5.5l4 4 4-4', stroke: 'currentColor', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
}
function IcoChevronRight(p) {
  return _react.createElement('svg', Object.assign({ viewBox: '0 0 14 14', width: 14, height: 14, 'aria-hidden': true }, p),
    _react.createElement('path', { d: 'M5 3l4 4-4 4', stroke: 'currentColor', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
}
function IcoCheck() {
  return _react.createElement('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': true },
    _react.createElement('path', { d: 'M3.5 8.5l3 3 6-6.5', stroke: 'currentColor', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
}
function IcoWarning() {
  return _react.createElement('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': true },
    _react.createElement('path', { d: 'M8 2L1.5 13h13L8 2z', stroke: 'currentColor', fill: 'none', strokeWidth: 1.2 }),
    _react.createElement('path', { d: 'M8 6.5v3M8 11.5v.5', stroke: 'currentColor', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' }));
}

var CSS =
  '.emps-root{min-width:0;position:relative}' +
  '.emps-trigger{min-width:0;max-width:min(360px,45cqw);height:28px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:24px;outline:none;align-items:center;gap:4px;padding:0 4px 0 8px;font-size:13px;font-weight:500;line-height:20px;display:flex}' +
  '.emps-trigger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}' +
  '.emps-trigger:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3)}' +
  '.emps-trigger:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}' +
  '.emps-triggerProvider{color:var(--dsw-alias-label-caption);flex:none;font-weight:400}' +
  '.emps-triggerLabel{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}' +
  '.emps-triggerEffort{color:var(--dsw-alias-label-caption);flex:none}' +
  '.emps-chevron{color:var(--dsw-alias-label-caption);flex:none;transition:transform .12s}' +
  '.emps-chevronOpen{transform:rotate(180deg)}' +
  '.emps-menu{z-index:20;border:1px solid var(--dsw-alias-border-inverted);background:var(--dsw-specific-menu);width:max-content;min-width:min(240px,100vw - 32px);max-width:min(420px,100vw - 32px);max-height:min(360px,100vh - 96px);box-shadow:var(--dsw-shadow-lv3);color:var(--dsw-alias-label-primary);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);border-radius:12px;flex-direction:column;padding:4px;display:flex;position:absolute;bottom:calc(100% + 8px);right:0;overflow:hidden}' +
  '.emps-status,.emps-empty{color:var(--dsw-alias-label-tertiary);padding:10px;font-size:13px;line-height:20px}' +
  '.emps-error,.emps-warning{background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary);border-radius:8px;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:4px;padding:7px 8px;font-size:12px;line-height:18px;display:flex}' +
  '.emps-warning{background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-state-warn-label)}' +
  '.emps-retry{color:inherit;font:inherit;cursor:pointer;background:0 0;border:none;white-space:nowrap;text-decoration:underline;font-size:12px}' +
  '.emps-cell{width:100%;justify-content:space-between;align-items:center;gap:8px;padding:7px 8px;font-size:13px;line-height:20px;display:flex;background:0 0;border:none;border-radius:8px;color:var(--dsw-alias-label-primary);cursor:pointer;text-align:left}' +
  '.emps-cell:hover{background:var(--dsw-alias-interactive-bg-hover)}' +
  '.emps-cellLabel{color:var(--dsw-alias-label-secondary);flex:none}' +
  '.emps-cellValue{color:var(--dsw-alias-label-primary);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;flex:1;min-width:0}' +
  '.emps-cellChevron{color:var(--dsw-alias-label-caption);flex:none}' +
  '.emps-groups{overflow-y:auto;flex:1;min-height:0;scrollbar-width:thin}' +
  '.emps-group{padding:2px 0}' +
  '.emps-groupTitle{color:var(--dsw-alias-label-tertiary);padding:6px 8px 2px;font-size:11px;font-weight:600;line-height:16px;text-transform:uppercase;letter-spacing:.04em}' +
  '.emps-option{width:100%;justify-content:space-between;align-items:center;gap:8px;padding:7px 8px;font-size:13px;line-height:20px;display:flex;background:0 0;border:none;border-radius:8px;color:var(--dsw-alias-label-primary);cursor:pointer;text-align:left}' +
  '.emps-option:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}' +
  '.emps-option:disabled{cursor:default;opacity:.5}' +
  '.emps-selected{background:var(--dsw-alias-interactive-bg-hover)}' +
  '.emps-optionCopy{min-width:0;flex:1;display:flex;flex-direction:column;gap:0}' +
  '.emps-modelName{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}' +
  '.emps-description{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}' +
  '.emps-check{flex:none;width:16px;height:16px;display:flex;align-items:center;justify-content:center;color:var(--dsw-alias-label-secondary)}' +
  '.emps-filterBar{padding:4px;border-bottom:1px solid var(--dsw-alias-border-inverted);display:flex;gap:4px;flex-wrap:wrap;align-items:center}' +
  '.emps-filterLabel{color:var(--dsw-alias-label-tertiary);font-size:11px;font-weight:600;padding:2px 4px;text-transform:uppercase;letter-spacing:.04em}' +
  '.emps-filterChip{padding:2px 8px;font-size:12px;line-height:18px;border-radius:12px;border:1px solid var(--dsw-alias-border-l2);background:0 0;color:var(--dsw-alias-label-secondary);cursor:pointer;white-space:nowrap}' +
  '.emps-filterChip:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}' +
  '.emps-filterChipActive{background:var(--dsw-alias-interactive-bg-selected,var(--dsw-alias-interactive-bg-hover));color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l3);font-weight:500}' +
  '.emps-toast{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-primary);padding:8px 12px;border-radius:8px;box-shadow:var(--dsw-shadow-lv3);font-size:12px;z-index:100;display:flex;align-items:center;gap:6px;max-width:90vw}';

function injectStyles() {
  if (typeof document === 'undefined') return function() {};
  var attr = 'data-emps-css';
  var existing = document.querySelector('style[' + attr + ']');
  if (existing !== null) return function() {};
  var tag = document.createElement('style');
  tag.setAttribute(attr, '1');
  tag.textContent = CSS;
  document.head.appendChild(tag);
  return function() { tag.remove(); };
}

function EnhancedModelSelect(props) {
  var locked = props.locked, available = props.available, directory = props.directory;
  var load = props.load, select = props.select, t = props.t;

  function tt(key, params) {
    if (typeof t === 'function') {
      try { var r = t(key, params); if (r) return r; } catch (e) {}
    }
    var s = FALLBACK[key] || key;
    if (params) { for (var k in params) s = s.split('{' + k + '}').join(String(params[k])); }
    return s;
  }

  var state = _react.useSyncExternalStore(
    function (fn) { return directory.subscribe(fn); },
    function () { return directory.getSnapshot(); }
  );

  var openState = _react.useState(false);
  var open = openState[0], setOpen = openState[1];
  var paneState = _react.useState('root');
  var pane = paneState[0], setPane = paneState[1];
  var filterState = _react.useState(null);
  var filter = filterState[0], setFilter = filterState[1];
  var lastActionRef = _react.useRef('load');
  var toastState = _react.useState(null);
  var toast = toastState[0], setToast = toastState[1];
  var toastSeq = _react.useRef(0);
  var rootRef = _react.useRef(null);
  var triggerRef = _react.useRef(null);
  var itemRefs = _react.useRef([]);
  var id = _react.useId ? _react.useId() : 'emps';

  var choices = _react.useMemo(function () {
    return [].concat.apply([], state.groups.map(function (group) {
      return group.models.map(function (model) {
        return {
          group: group, model: model,
          selection: Object.assign(
            { provider: group.id, model: model.id },
            model.reasoning && model.reasoning.defaultEffort !== undefined
              ? { reasoningEffort: model.reasoning.defaultEffort }
              : {}
          )
        };
      });
    }));
  }, [state.groups]);

  var currentChoice = undefined;
  if (state.current !== null) {
    for (var i = 0; i < choices.length; i++) {
      if (choices[i].selection.provider === state.current.provider &&
          choices[i].selection.model === state.current.model) {
        currentChoice = choices[i];
        break;
      }
    }
  }

  var reasoning = currentChoice ? currentChoice.model.reasoning : undefined;
  var effectiveEffort = state.current !== null
    ? (state.current.reasoningEffort !== undefined
        ? state.current.reasoningEffort
        : (reasoning ? reasoning.defaultEffort : undefined))
    : undefined;

  var effortLabel = undefined;
  if (reasoning !== undefined) {
    if (effectiveEffort === undefined) {
      effortLabel = tt('effort.providerDefault');
    } else {
      var el = undefined;
      for (var j = 0; j < reasoning.efforts.length; j++) {
        if (reasoning.efforts[j].id === effectiveEffort) {
          el = reasoning.efforts[j].name;
          break;
        }
      }
      effortLabel = el !== undefined ? el : effectiveEffort;
    }
  }

  var effortChoices = _react.useMemo(function () {
    if (reasoning === undefined) return [];
    var arr = [];
    if (reasoning.defaultEffort === undefined) {
      arr.push({ key: 'provider-default', effort: undefined, label: tt('effort.providerDefault') });
    }
    for (var i = 0; i < reasoning.efforts.length; i++) {
      var e = reasoning.efforts[i];
      var item = { key: 'effort:' + e.id, effort: e.id, label: e.name };
      if (e.description !== undefined) item.description = e.description;
      arr.push(item);
    }
    return arr;
  }, [reasoning]);

  var busy = state.status === 'selecting';

  var providerName = currentChoice ? currentChoice.group.name : undefined;
  var modelLabel = currentChoice ? currentChoice.model.name : tt('trigger.fallback');
  var filteredGroups = filter === null
    ? state.groups
    : state.groups.filter(function (g) { return g.id === filter; });

  var reload = function () { lastActionRef.current = 'load'; load(); };

  _react.useEffect(function () {
    if (available) { lastActionRef.current = 'load'; load(); }
  }, [available, load]);

  _react.useEffect(function () {
    if (!open) return;
    function closeOutside(event) {
      if (!rootRef.current || !rootRef.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener('mousedown', closeOutside);
    return function () { document.removeEventListener('mousedown', closeOutside); };
  }, [open]);

  _react.useEffect(function () {
    if (!open) { setFilter(null); setToast(null); }
  }, [open]);

  if (!available) return null;

  var show = function () { setPane('root'); setOpen(true); reload(); };
  var close = function (restoreFocus) {
    setOpen(false); setPane('root'); setFilter(null); setToast(null);
    if (restoreFocus) queueMicrotask(function () { if (triggerRef.current) triggerRef.current.focus(); });
  };

  var moveFocus = function (offset) {
    var items = itemRefs.current.filter(function (item) { return item !== null; });
    if (items.length === 0) return;
    var active = -1;
    for (var i = 0; i < items.length; i++) {
      if (items[i] === document.activeElement) { active = i; break; }
    }
    items[(Math.max(active, 0) + offset + items.length) % items.length].focus();
  };

  var onRootKeyDown = function (event) {
    if (event.key === 'Escape' && open) {
      event.preventDefault();
      if (pane !== 'root') { setPane('root'); setFilter(null); }
      else close(true);
      return;
    }
    if (!open) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(event.key === 'ArrowDown' ? 1 : -1);
    }
  };

  var onBlur = function (event) {
    if (event.relatedTarget instanceof Node && rootRef.current &&
        rootRef.current.contains(event.relatedTarget)) return;
    close();
  };

  var settleSelection = function (accepted) {
    if (accepted) { if (rootRef.current !== null) close(true); return; }
    var message = directory.getSnapshot().error;
    if (message !== null) {
      toastSeq.current += 1;
      setToast({ seq: toastSeq.current, text: tt('error.action', { message: message }) });
    }
  };

  var choose = function (selection) {
    if (state.current !== null &&
        state.current.provider === selection.provider &&
        state.current.model === selection.model) { close(true); return; }
    lastActionRef.current = 'select';
    select(selection).then(settleSelection);
  };

  var chooseEffort = function (effort) {
    if (state.current === null) return;
    if (effectiveEffort === effort) { close(true); return; }
    var sel = Object.assign(
      { provider: state.current.provider, model: state.current.model },
      effort === undefined ? {} : { reasoningEffort: effort }
    );
    lastActionRef.current = 'select';
    select(sel).then(settleSelection);
  };

  var triggerLabelFull = effortLabel === undefined ? modelLabel : modelLabel + ' · ' + effortLabel;
  var ariaModel = providerName !== undefined ? providerName + ' ' + modelLabel : modelLabel;
  var triggerAria = currentChoice === undefined
    ? tt('trigger.selectAria')
    : effortLabel === undefined
      ? tt('trigger.aria', { model: ariaModel })
      : tt('trigger.ariaEffort', { model: ariaModel, effort: effortLabel });

  itemRefs.current = [];
  var itemIndex = 0;
  var itemRef = function () { var at = itemIndex++; return function (node) { itemRefs.current[at] = node; }; };

  var triggerChildren = [];
  if (providerName !== undefined) {
    triggerChildren.push(_react.createElement('span', { className: 'emps-triggerProvider', key: 'provider' }, providerName));
  }
  triggerChildren.push(_react.createElement('span', { className: 'emps-triggerLabel', key: 'label' }, modelLabel));
  if (effortLabel !== undefined) {
    triggerChildren.push(_react.createElement('span', { className: 'emps-triggerEffort', key: 'effort' }, effortLabel));
  }
  triggerChildren.push(_react.createElement(IcoChevronDown, { className: cx('emps-chevron', open && 'emps-chevronOpen'), key: 'chevron' }));

  var menuChildren = [];

  if (pane === 'root') {
    menuChildren.push(_react.createElement('button', {
      ref: itemRef(), type: 'button', role: 'menuitem', className: 'emps-cell', key: 'model',
      onClick: function () { setPane('model'); }
    }, [
      _react.createElement('span', { className: 'emps-cellLabel', key: 'l' }, tt('menu.model')),
      _react.createElement('span', { className: 'emps-cellValue', key: 'v' }, modelLabel),
      _react.createElement(IcoChevronRight, { className: 'emps-cellChevron', key: 'c' })
    ]));
    if (reasoning !== undefined) {
      menuChildren.push(_react.createElement('button', {
        ref: itemRef(), type: 'button', role: 'menuitem', className: 'emps-cell', key: 'effort',
        onClick: function () { setPane('effort'); }
      }, [
        _react.createElement('span', { className: 'emps-cellLabel', key: 'l' }, tt('menu.effort')),
        _react.createElement('span', { className: 'emps-cellValue', key: 'v' }, effortLabel),
        _react.createElement(IcoChevronRight, { className: 'emps-cellChevron', key: 'c' })
      ]));
    }
  }

  if (pane === 'model') {
    if (state.status === 'loading') {
      menuChildren.push(_react.createElement('div', { className: 'emps-status', key: 'loading' }, tt('status.loading')));
    }
    if (state.error !== null && lastActionRef.current === 'load') {
      menuChildren.push(_react.createElement('div', { className: 'emps-error', key: 'error' },
        _react.createElement('span', null, tt('error.action', { message: state.error })),
        _react.createElement('button', { type: 'button', className: 'emps-retry', onClick: reload }, tt('retry'))
      ));
    }
    for (var fi = 0; fi < state.failures.length; fi++) {
      var fl = state.failures[fi];
      menuChildren.push(_react.createElement('div', { className: 'emps-warning', key: 'fail-' + fl.id },
        _react.createElement('span', null, tt('warning.groupLoad', { name: fl.name, message: fl.message })),
        _react.createElement('button', { type: 'button', className: 'emps-retry', onClick: reload }, tt('retry'))
      ));
    }

    if (state.groups.length > 1) {
      var fc = [_react.createElement('span', { className: 'emps-filterLabel', key: 'fl' }, tt('filter.title'))];
      fc.push(_react.createElement('button', {
        type: 'button',
        className: cx('emps-filterChip', filter === null && 'emps-filterChipActive'),
        key: 'all',
        onClick: function () { setFilter(null); }
      }, tt('filter.all')));
      for (var gi = 0; gi < state.groups.length; gi++) {
        (function (grp) {
          fc.push(_react.createElement('button', {
            type: 'button',
            className: cx('emps-filterChip', filter === grp.id && 'emps-filterChipActive'),
            key: grp.id,
            onClick: function () { setFilter(grp.id); }
          }, grp.name));
        })(state.groups[gi]);
      }
      menuChildren.push(_react.createElement('div', { className: 'emps-filterBar', key: 'filter' }, fc));
    }

    var groupSections = filteredGroups.map(function (group) {
      var headingId = id + '-' + group.id;
      var secChildren = [
        _react.createElement('div', { className: 'emps-groupTitle', id: headingId, key: 'title' }, group.name)
      ];
      for (var mi = 0; mi < group.models.length; mi++) {
        (function (model, group) {
          var sel = state.current !== null &&
                    state.current.provider === group.id &&
                    state.current.model === model.id;
          secChildren.push(_react.createElement('button', {
            ref: itemRef(), type: 'button', role: 'menuitemradio', 'aria-checked': sel,
            className: cx('emps-option', sel && 'emps-selected'),
            title: model.name, disabled: busy, key: model.id,
            onClick: function () { choose({ provider: group.id, model: model.id }); }
          }, [
            _react.createElement('span', { className: 'emps-optionCopy', key: 'copy' }, [
              _react.createElement('span', { className: 'emps-modelName', key: 'n' }, model.name),
              model.description !== undefined
                ? _react.createElement('span', { className: 'emps-description', key: 'd' }, model.description)
                : null
            ]),
            _react.createElement('span', { className: 'emps-check', key: 'chk' },
              sel ? _react.createElement(IcoCheck) : null)
          ]));
        })(group.models[mi], group);
      }
      return _react.createElement('section', {
        role: 'group', 'aria-labelledby': headingId,
        className: 'emps-group', key: group.id
      }, secChildren);
    });
    menuChildren.push(_react.createElement('div', { className: 'emps-groups', key: 'groups' }, groupSections));

    if (state.status === 'ready' && choices.length === 0) {
      menuChildren.push(_react.createElement('div', { className: 'emps-empty', key: 'empty' }, tt('empty.models')));
    }
  }

  if (pane === 'effort') {
    if (state.error !== null && lastActionRef.current === 'load') {
      menuChildren.push(_react.createElement('div', { className: 'emps-error', key: 'error' },
        _react.createElement('span', null, tt('error.action', { message: state.error })),
        _react.createElement('button', { type: 'button', className: 'emps-retry', onClick: reload }, tt('action.reload'))
      ));
    }
    if (effortChoices.length === 0) {
      menuChildren.push(_react.createElement('div', { className: 'emps-empty', key: 'empty' }, tt('empty.efforts')));
    } else {
      for (var ei = 0; ei < effortChoices.length; ei++) {
        (function (level) {
          var selE = effectiveEffort === level.effort;
          menuChildren.push(_react.createElement('button', {
            ref: itemRef(), type: 'button', role: 'menuitemradio', 'aria-checked': selE,
            className: cx('emps-option', selE && 'emps-selected'),
            disabled: busy, key: level.key,
            onClick: function () { chooseEffort(level.effort); }
          }, [
            _react.createElement('span', { className: 'emps-optionCopy', key: 'copy' }, [
              _react.createElement('span', { className: 'emps-modelName', key: 'n' }, level.label),
              level.description !== undefined
                ? _react.createElement('span', { className: 'emps-description', key: 'd' }, level.description)
                : null
            ]),
            _react.createElement('span', { className: 'emps-check', key: 'chk' },
              selE ? _react.createElement(IcoCheck) : null)
          ]));
        })(effortChoices[ei]);
      }
    }
  }

  var rootChildren = [
    _react.createElement('button', {
      ref: triggerRef, type: 'button', className: 'emps-trigger',
      'aria-label': triggerAria,
      'aria-haspopup': 'menu', 'aria-expanded': open,
      'aria-controls': open ? id + '-menu' : undefined,
      title: triggerLabelFull, disabled: locked, key: 'trigger',
      onClick: function () { if (open) close(); else show(); }
    }, triggerChildren)
  ];
  if (open) {
    rootChildren.push(_react.createElement('div', {
      id: id + '-menu', className: 'emps-menu', role: 'menu',
      'aria-label': tt('menu.aria'),
      'aria-busy': state.status === 'loading' || busy,
      key: 'menu'
    }, menuChildren));
  }
  if (toast !== null) {
    rootChildren.push(_react.createElement('div', {
      className: 'emps-toast', key: 'toast-' + toast.seq
    },
      _react.createElement(IcoWarning),
      _react.createElement('span', null, toast.text)
    ));
  }

  return _react.createElement('div', {
    ref: rootRef, className: 'emps-root',
    onKeyDown: onRootKeyDown, onBlur: onBlur
  }, rootChildren);
}

var inject = ['slots', 'modelDirectories', 'sessions'];

function apply(ctx) {
  ctx.effect(function () {
    var disposeStyle = injectStyles();
    return function () { disposeStyle(); };
  }, 'emps: styles');

  ctx.effect(function () {
    var di = ctx.slots.inject('conversation.input.model', function () {
      return ctx.slots.register({
        name: 'conversation.input.model',
        locale: 'model',
        priority: -100,
        inject: function (sessionId) {
          var dir = ctx.modelDirectories.directoryFor(sessionId);
          var avail = ctx.sessions.subagentAddress(sessionId) === undefined;
          return {
            available: avail,
            directory: dir.store,
            load: function () { if (avail) dir.load().catch(function () {}); },
            select: function (sel) {
              return avail
                ? dir.select(sel).then(function () { return true; }, function () { return false; })
                : Promise.resolve(false);
            }
          };
        }
      }, EnhancedModelSelect);
    });
    return function () { di(); };
  }, 'emps: slot');
}

exports.apply = apply;
exports.inject = inject;
return module.exports;
} });
