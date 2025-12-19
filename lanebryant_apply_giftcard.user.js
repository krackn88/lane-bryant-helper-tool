// ==UserScript==
// @name         Lane Bryant Helper Tool
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Shopping assistant utility
// @author       You
// @match        https://www.lanebryant.com/*
// @grant        GM_setClipboard
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';

    const _0x1a2b = {
        _a: atob('aHR0cHM6Ly93d3cubGFuZWJyeWFudC5jb20='),
        _b: atob('L29uL2RlbWFuZHdhcmUuc3RvcmUvU2l0ZXMtTGFuZUJyeWFudC1TaXRlL2RlZmF1bHQvQXVydXNHaWZ0Q2FyZHMtQXBwbHlHQw==')
    };

    function _0x3c4d() {
        const _0x5e6f = document['getElementsByName'](atob('Y3NyZl90b2tlbg=='));
        if (_0x5e6f['length'] > 0 && _0x5e6f[0]['value']) return _0x5e6f[0]['value'];
        const _0x7g8h = document['querySelector'](atob('aW5wdXRbbmFtZT0iY3NyZl90b2tlbiJd'));
        if (_0x7g8h && _0x7g8h['value']) return _0x7g8h['value'];
        const _0x9i0j = document['querySelector'](atob('bWV0YVtuYW1lPSJjc3JmLXRva2VuIl0='));
        if (_0x9i0j && _0x9i0j['getAttribute']('content')) return _0x9i0j['getAttribute']('content');
        const _0x1k2l = document['documentElement']['innerHTML'];
        const _0x3m4n = [
            /name=["']csrf_token["']\s+value=["']([^"']+)["']/i,
            /csrf_token["']?\s*[:=]\s*["']([^"']+)["']/i,
            /<input[^>]*name=["']csrf_token["'][^>]*value=["']([^"']+)["']/i
        ];
        for (let _0x5o6p = 0; _0x5o6p < _0x3m4n['length']; _0x5o6p++) {
            const _0x7q8r = _0x1k2l['match'](_0x3m4n[_0x5o6p]);
            if (_0x7q8r && _0x7q8r[1]) return _0x7q8r[1];
        }
        return null;
    }

    async function _0x2d1e(_0x4f5g) {
        const _0x6h7i = _0x3c4d();
        if (!_0x6h7i) {
            console.warn('[Apply] CSRF token not found, but will try anyway...');
        }
        try {
            const _0x8j9k = String.fromCharCode(103,105,102,116,67,101,114,116,67,111,100,101) + '=' + _0x4f5g + '&' + String.fromCharCode(116,111,107,101,110) + '=&' + atob('Y3NyZl90b2tlbg==') + '=' + encodeURIComponent(_0x6h7i || '');
            const _0x0a1b = await fetch(_0x1a2b['_a'] + _0x1a2b['_b'], {
                method: String.fromCharCode(80,79,83,84),
                headers: {
                    accept: 'application/json, text/javascript, */*; q=0.01',
                    'accept-language': 'en-US,en;q=0.9',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'x-requested-with': 'XMLHttpRequest'
                },
                referrer: _0x1a2b['_a'] + '/checkout?stage=payment',
                body: _0x8j9k,
                mode: 'cors',
                credentials: 'include'
            });
            console.log('[Apply] Response status:', _0x0a1b['status']);
            const _0x2c3d = await _0x0a1b['json']();
            console.log('[Apply] Response data:', _0x2c3d);
            const _0x4e5f = _0x2c3d['giftCertificate'] || {};
            if (_0x2c3d['giftCertificate']) {
                console.log('[Apply] Gift Certificate keys:', Object['keys'](_0x2c3d['giftCertificate']));
                console.log('[Apply] Gift Certificate object:', _0x2c3d['giftCertificate']);
            }
            let _0x6g7h = null, _0x8i9j = null, _0x0k1l = null;
            if (_0x4e5f['responseMessage']) _0x8i9j = _0x4e5f['responseMessage'];
            else if (_0x2c3d['message']) _0x8i9j = _0x2c3d['message'];
            else if (_0x4e5f['message']) _0x8i9j = _0x4e5f['message'];
            if (_0x4e5f['exception']) _0x0k1l = _0x4e5f['exception'];
            else if (_0x2c3d['error']) _0x0k1l = _0x2c3d['error'];
            else if (_0x4e5f['error']) _0x0k1l = _0x4e5f['error'];
            if (_0x2c3d['errorMessage']) _0x0k1l = _0x2c3d['errorMessage'];
            else if (_0x4e5f['errorMessage']) _0x0k1l = _0x4e5f['errorMessage'];
            if (_0x4e5f['giftCardBalance'] !== undefined) _0x6g7h = _0x4e5f['giftCardBalance'];
            else if (_0x4e5f['balance'] !== undefined) _0x6g7h = _0x4e5f['balance'];
            else if (_0x4e5f['amount'] !== undefined) _0x6g7h = _0x4e5f['amount'];
            else if (_0x4e5f['availableBalance'] !== undefined) _0x6g7h = _0x4e5f['availableBalance'];
            else if (_0x4e5f['balanceAmount'] !== undefined) _0x6g7h = _0x4e5f['balanceAmount'];
            else if (_0x4e5f['remainingBalance'] !== undefined) _0x6g7h = _0x4e5f['remainingBalance'];
            else if (_0x4e5f['currentBalance'] !== undefined) _0x6g7h = _0x4e5f['currentBalance'];
            else if (_0x2c3d['balance'] !== undefined) _0x6g7h = _0x2c3d['balance'];
            else if (_0x2c3d['amount'] !== undefined) _0x6g7h = _0x2c3d['amount'];
            const _0x0p1q = _0x4e5f['appliedAmount'] !== undefined ? _0x4e5f['appliedAmount'] : null;
            if ((_0x6g7h === null || _0x6g7h === undefined || _0x6g7h === 0) && _0x0p1q && _0x0p1q > 0) {
                console.log('[Apply] Balance is 0 but appliedAmount is $' + _0x0p1q + ', using appliedAmount as balance');
                _0x6g7h = _0x0p1q;
            }
            const _0x2r3s = _0x4e5f['success'] === true || (_0x0p1q !== null && _0x0p1q > 0);
            const _0x9s0t = _0x0k1l && typeof _0x0k1l === 'string' && _0x0k1l['trim']() !== '';
            const _0x2m3n = _0x0a1b['ok'] && _0x2r3s && !_0x9s0t;
            console.log('[Apply] gcSuccess:', _0x2r3s, 'response.ok:', _0x0a1b['ok'], 'error:', _0x0k1l, 'final success:', _0x2m3n);
            return {
                success: _0x2m3n,
                card: _0x4f5g,
                balance: _0x6g7h,
                appliedAmount: _0x0p1q,
                message: _0x8i9j || _0x0k1l || (_0x2r3s ? 'Applied successfully' : 'Failed'),
                rawData: _0x2c3d
            };
        } catch (_0x4o5p) {
            return {
                success: false,
                card: _0x4f5g,
                error: _0x4o5p['message'] || 'Unknown error',
                rawData: null
            };
        }
    }

    function _0x6q7r() {
        const _0x8s9t = document['getElementById']('_ui_helper');
        if (_0x8s9t) _0x8s9t['remove']();
        const _0x0u1v = document['createElement']('div');
        _0x0u1v['id'] = '_ui_helper';
        _0x0u1v['style']['cssText'] = 'position:fixed;top:20px;right:20px;width:400px;background:#fff;border:2px solid #333;border-radius:8px;padding:20px;box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:10000;font-family:Arial,sans-serif;font-size:14px';
        _0x0u1v['innerHTML'] = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px"><h2 style="margin:0;color:#333;font-size:18px">Enter Code</h2><button id="_close_btn" style="background:#ff4444;color:#fff;border:none;border-radius:4px;padding:5px 10px;cursor:pointer;font-size:14px">✕</button></div><div style="margin-bottom:15px"><label style="display:block;margin-bottom:5px;color:#333;font-weight:bold">Code:</label><input type="text" id="_input_field" placeholder="Enter code" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box" maxlength="16"></div><button id="_submit_btn" style="width:100%;padding:10px;background:#4CAF50;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:16px;font-weight:bold;margin-bottom:15px">Submit</button><div id="_result_area" style="margin-top:15px;padding:10px;border-radius:4px;display:none"></div>';
        document['body']['appendChild'](_0x0u1v);
        document['getElementById']('_close_btn')['addEventListener']('click', () => _0x0u1v['remove']());
        const _0x2w3x = document['getElementById']('_submit_btn');
        const _0x4y5z = document['getElementById']('_input_field');
        const _0x6a7b = document['getElementById']('_result_area');
        _0x2w3x['addEventListener']('click', async () => {
            const _0x8c9d = _0x4y5z['value']['trim']()['replace'](/\s+/g, '');
            if (!_0x8c9d) {
                _0xe0f1('error', 'Please enter a code');
                return;
            }
            if (_0x8c9d['length'] !== 16 || !/^\d+$/.test(_0x8c9d)) {
                _0xe0f1('error', 'Please enter a valid 16-digit code');
                return;
            }
            _0x2w3x['disabled'] = true;
            _0x2w3x['textContent'] = 'Processing...';
            _0x6a7b['style']['display'] = 'none';
            try {
                const _0x2g3h = await _0x2d1e(_0x8c9d);
                if (_0x2g3h['success']) {
                    let _0x4i5j = _0x2g3h['balance'] !== null && _0x2g3h['balance'] !== undefined ? _0x2g3h['balance'] : 0;
                    if (_0x4i5j === 0 && _0x2g3h['appliedAmount'] && _0x2g3h['appliedAmount'] > 0) {
                        _0x4i5j = _0x2g3h['appliedAmount'];
                    }
                    const _0x5k6l = _0x4i5j > 0 ? '$' + _0x4i5j['toFixed'](2) : 'N/A';
                    const _0x7m8n = _0x2g3h['appliedAmount'] !== null && _0x2g3h['appliedAmount'] !== undefined && _0x2g3h['appliedAmount'] !== _0x4i5j ? ' (Applied: $' + _0x2g3h['appliedAmount']['toFixed'](2) + ')' : '';
                    _0xe0f1('success', '✓ Code processed successfully!\nBalance: ' + _0x5k6l + _0x7m8n + '\n' + _0x2g3h['message'] + '\n\nRefreshing page to show gift card...');
                    if (typeof GM_setClipboard !== 'undefined') {
                        GM_setClipboard(_0x8c9d + ':' + _0x5k6l, 'text');
                    }
                    if (typeof GM_notification !== 'undefined') {
                        GM_notification({
                            title: 'Code Processed',
                            text: 'Balance: ' + _0x5k6l,
                            timeout: 3000
                        });
                    }
                    setTimeout(() => {
                        window['location']['reload']();
                    }, 1500);
                } else {
                    const _0x9o0p = _0x2g3h['error'] || _0x2g3h['message'] || 'Unknown error';
                    _0xe0f1('error', '✗ Failed to process code\n' + _0x9o0p);
                    if (_0x2g3h['rawData']) {
                        console.error('[Apply] Raw response:', _0x2g3h['rawData']);
                    }
                }
            } catch (_0x6k7l) {
                _0xe0f1('error', '✗ Error: ' + (_0x6k7l['message'] || 'Unknown error'));
                console.error('[Apply] Exception:', _0x6k7l);
            } finally {
                _0x2w3x['disabled'] = false;
                _0x2w3x['textContent'] = 'Submit';
            }
        });
        _0x4y5z['addEventListener']('keypress', (_0x8m9n) => {
            if (_0x8m9n['key'] === 'Enter' && !_0x2w3x['disabled']) _0x2w3x['click']();
        });
        function _0xe0f1(_0x0o1p, _0x2q3r) {
            _0x6a7b['style']['display'] = 'block';
            _0x6a7b['style']['background'] = _0x0o1p === 'success' ? '#d4edda' : '#f8d7da';
            _0x6a7b['style']['color'] = _0x0o1p === 'success' ? '#155724' : '#721c24';
            _0x6a7b['style']['border'] = '1px solid ' + (_0x0o1p === 'success' ? '#c3e6cb' : '#f5c6cb');
            _0x6a7b['style']['whiteSpace'] = 'pre-line';
            _0x6a7b['textContent'] = _0x2q3r;
        }
    }

    function _0x4s5t() {
        if (!window['location']['href']['includes']('/checkout')) {
            const _0x6u7v = document['createElement']('button');
            _0x6u7v['textContent'] = 'Helper';
            _0x6u7v['style']['cssText'] = 'position:fixed;bottom:20px;right:20px;padding:12px 20px;background:#4CAF50;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:16px;font-weight:bold;box-shadow:0 4px 8px rgba(0,0,0,0.3);z-index:9999';
            _0x6u7v['addEventListener']('click', () => {
                if (!window['location']['href']['includes']('/checkout')) {
                    window['location']['href'] = _0x1a2b['_a'] + '/checkout?stage=payment';
                    setTimeout(() => _0x6q7r(), 2000);
                } else {
                    _0x6q7r();
                }
            });
            document['body']['appendChild'](_0x6u7v);
        } else {
            _0x6q7r();
        }
    }

    if (document['readyState'] === 'loading') {
        document['addEventListener']('DOMContentLoaded', _0x4s5t);
    } else {
        _0x4s5t();
    }

    document['addEventListener']('keydown', (_0x8w9x) => {
        if (_0x8w9x['ctrlKey'] && _0x8w9x['shiftKey'] && _0x8w9x['key'] === 'A') {
            _0x8w9x['preventDefault']();
            _0x6q7r();
        }
    });

})();
