/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "(rsc)/./app/api/send-email/route.ts":
/*!*************************************!*\
  !*** ./app/api/send-email/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _utils_mailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/mailer */ \"(rsc)/./utils/mailer.ts\");\n\n\nasync function POST(request) {\n    try {\n        const data = await request.json();\n        // Валидация данных\n        if (!data.name || !data.phone) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Name and phone are required'\n            }, {\n                status: 400\n            });\n        }\n        // Отправка письма\n        const result = await (0,_utils_mailer__WEBPACK_IMPORTED_MODULE_1__.sendEmail)(data);\n        if (!result.success) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: result.error\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error('Error in email API:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ2lCO0FBRXJELGVBQWVFLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxPQUFpQixNQUFNRCxRQUFRRSxJQUFJO1FBRXpDLG1CQUFtQjtRQUNuQixJQUFJLENBQUNELEtBQUtFLElBQUksSUFBSSxDQUFDRixLQUFLRyxLQUFLLEVBQUU7WUFDN0IsT0FBT1AscURBQVlBLENBQUNLLElBQUksQ0FDdEI7Z0JBQUVHLE9BQU87WUFBOEIsR0FDdkM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGtCQUFrQjtRQUNsQixNQUFNQyxTQUFTLE1BQU1ULHdEQUFTQSxDQUFDRztRQUUvQixJQUFJLENBQUNNLE9BQU9DLE9BQU8sRUFBRTtZQUNuQixPQUFPWCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtnQkFBRUcsT0FBT0UsT0FBT0YsS0FBSztZQUFDLEdBQ3RCO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPVCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVNLFNBQVM7UUFBSztJQUMzQyxFQUFFLE9BQU9ILE9BQU87UUFDZEksUUFBUUosS0FBSyxDQUFDLHVCQUF1QkE7UUFDckMsT0FBT1IscURBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFBRUcsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiRTpcXGZ1cm5pdHVyZS1sYW5kaW5nLXNvdXJjZS11cGRhdGVkXFxhcHBcXGFwaVxcc2VuZC1lbWFpbFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBzZW5kRW1haWwsIEZvcm1EYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWFpbGVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YTogRm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAvLyDQktCw0LvQuNC00LDRhtC40Y8g0LTQsNC90L3Ri9GFXHJcbiAgICBpZiAoIWRhdGEubmFtZSB8fCAhZGF0YS5waG9uZSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ05hbWUgYW5kIHBob25lIGFyZSByZXF1aXJlZCcgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQntGC0L/RgNCw0LLQutCwINC/0LjRgdGM0LzQsFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZEVtYWlsKGRhdGEpO1xyXG5cclxuICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IHJlc3VsdC5lcnJvciB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVtYWlsIEFQSTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInNlbmRFbWFpbCIsIlBPU1QiLCJyZXF1ZXN0IiwiZGF0YSIsImpzb24iLCJuYW1lIiwicGhvbmUiLCJlcnJvciIsInN0YXR1cyIsInJlc3VsdCIsInN1Y2Nlc3MiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-email/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=E%3A%5Cfurniture-landing-source-updated%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfurniture-landing-source-updated&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=E%3A%5Cfurniture-landing-source-updated%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfurniture-landing-source-updated&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_furniture_landing_source_updated_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-email/route.ts */ \"(rsc)/./app/api/send-email/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"E:\\\\furniture-landing-source-updated\\\\app\\\\api\\\\send-email\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_furniture_landing_source_updated_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDZnVybml0dXJlLWxhbmRpbmctc291cmNlLXVwZGF0ZWQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNmdXJuaXR1cmUtbGFuZGluZy1zb3VyY2UtdXBkYXRlZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDb0I7QUFDakc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXGZ1cm5pdHVyZS1sYW5kaW5nLXNvdXJjZS11cGRhdGVkXFxcXGFwcFxcXFxhcGlcXFxcc2VuZC1lbWFpbFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmQtZW1haWxcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlbmQtZW1haWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxmdXJuaXR1cmUtbGFuZGluZy1zb3VyY2UtdXBkYXRlZFxcXFxhcHBcXFxcYXBpXFxcXHNlbmQtZW1haWxcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=E%3A%5Cfurniture-landing-source-updated%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfurniture-landing-source-updated&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./utils/mailer.ts":
/*!*************************!*\
  !*** ./utils/mailer.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n// Проверяем наличие необходимых переменных окружения\nif (!process.env.EMAIL_USER || !process.env.APP_PASS) {\n    console.error('Отсутствуют необходимые переменные окружения EMAIL_USER или APP_PASS');\n    throw new Error('Missing required environment variables');\n}\n// Создаем транспорт для отправки писем\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n    host: 'smtp.yandex.ru',\n    port: 465,\n    secure: true,\n    auth: {\n        user: process.env.EMAIL_USER,\n        pass: process.env.APP_PASS // Используем пароль приложения\n    }\n});\n// Функция для отправки письма\nasync function sendEmail(data) {\n    const { name, phone, message } = data;\n    const mailOptions = {\n        from: `\"Мебель Home\" <${process.env.EMAIL_USER}>`,\n        to: process.env.EMAIL_USER,\n        subject: 'Новая заявка с сайта Мебель Home',\n        html: `\n      <h2>Новая заявка с сайта</h2>\n      <p><strong>Имя:</strong> ${name}</p>\n      <p><strong>Телефон:</strong> ${phone}</p>\n      ${message ? `<p><strong>Сообщение:</strong> ${message}</p>` : ''}\n      <p><em>Дата отправки: ${new Date().toLocaleString('ru-RU')}</em></p>\n    `\n    };\n    try {\n        console.log('Отправка письма...');\n        const info = await transporter.sendMail(mailOptions);\n        console.log('Письмо успешно отправлено');\n        return {\n            success: true\n        };\n    } catch (error) {\n        console.error('Ошибка при отправке письма:', error);\n        return {\n            success: false,\n            error: 'Failed to send email'\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9tYWlsZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFFcEMscURBQXFEO0FBQ3JELElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxRQUFRLEVBQUU7SUFDcERDLFFBQVFDLEtBQUssQ0FBQztJQUNkLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVBLHVDQUF1QztBQUN2QyxNQUFNQyxjQUFjUix1REFBMEIsQ0FBQztJQUM3Q1UsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsTUFBTTtRQUNKQyxNQUFNYixRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJZLE1BQU1kLFFBQVFDLEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLCtCQUErQjtJQUM1RDtBQUNGO0FBU0EsOEJBQThCO0FBQ3ZCLGVBQWVZLFVBQVVDLElBQWM7SUFDNUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUdIO0lBRWpDLE1BQU1JLGNBQWM7UUFDbEJDLE1BQU0sQ0FBQyxlQUFlLEVBQUVyQixRQUFRQyxHQUFHLENBQUNDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDakRvQixJQUFJdEIsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBQzFCcUIsU0FBUztRQUNUQyxNQUFNLENBQUM7OytCQUVvQixFQUFFUCxLQUFLO21DQUNILEVBQUVDLE1BQU07TUFDckMsRUFBRUMsVUFBVSxDQUFDLCtCQUErQixFQUFFQSxRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUc7NEJBQzNDLEVBQUUsSUFBSU0sT0FBT0MsY0FBYyxDQUFDLFNBQVM7SUFDN0QsQ0FBQztJQUNIO0lBRUEsSUFBSTtRQUNGdEIsUUFBUXVCLEdBQUcsQ0FBQztRQUNaLE1BQU1DLE9BQU8sTUFBTXJCLFlBQVlzQixRQUFRLENBQUNUO1FBQ3hDaEIsUUFBUXVCLEdBQUcsQ0FBQztRQUNaLE9BQU87WUFBRUcsU0FBUztRQUFLO0lBQ3pCLEVBQUUsT0FBT3pCLE9BQU87UUFDZEQsUUFBUUMsS0FBSyxDQUFDLCtCQUErQkE7UUFDN0MsT0FBTztZQUFFeUIsU0FBUztZQUFPekIsT0FBTztRQUF1QjtJQUN6RDtBQUNGIiwic291cmNlcyI6WyJFOlxcZnVybml0dXJlLWxhbmRpbmctc291cmNlLXVwZGF0ZWRcXHV0aWxzXFxtYWlsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbi8vINCf0YDQvtCy0LXRgNGP0LXQvCDQvdCw0LvQuNGH0LjQtSDQvdC10L7QsdGF0L7QtNC40LzRi9GFINC/0LXRgNC10LzQtdC90L3Ri9GFINC+0LrRgNGD0LbQtdC90LjRj1xuaWYgKCFwcm9jZXNzLmVudi5FTUFJTF9VU0VSIHx8ICFwcm9jZXNzLmVudi5BUFBfUEFTUykge1xuICBjb25zb2xlLmVycm9yKCfQntGC0YHRg9GC0YHRgtCy0YPRjtGCINC90LXQvtCx0YXQvtC00LjQvNGL0LUg0L/QtdGA0LXQvNC10L3QvdGL0LUg0L7QutGA0YPQttC10L3QuNGPIEVNQUlMX1VTRVIg0LjQu9C4IEFQUF9QQVNTJyk7XG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMnKTtcbn1cblxuLy8g0KHQvtC30LTQsNC10Lwg0YLRgNCw0L3RgdC/0L7RgNGCINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC/0LjRgdC10LxcbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICBob3N0OiAnc210cC55YW5kZXgucnUnLFxuICBwb3J0OiA0NjUsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXG4gICAgcGFzczogcHJvY2Vzcy5lbnYuQVBQX1BBU1MgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10Lwg0L/QsNGA0L7Qu9GMINC/0YDQuNC70L7QttC10L3QuNGPXG4gIH1cbn0pO1xuXG4vLyDQmNC90YLQtdGA0YTQtdC50YEg0LTQu9GPINC00LDQvdC90YvRhSDRhNC+0YDQvNGLXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwaG9uZTogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDQv9C40YHRjNC80LBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kRW1haWwoZGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgeyBuYW1lLCBwaG9uZSwgbWVzc2FnZSB9ID0gZGF0YTtcblxuICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgICBmcm9tOiBgXCLQnNC10LHQtdC70YwgSG9tZVwiIDwke3Byb2Nlc3MuZW52LkVNQUlMX1VTRVJ9PmAsIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQuNC80Y8g0L7RgtC/0YDQsNCy0LjRgtC10LvRj1xuICAgIHRvOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgIHN1YmplY3Q6ICfQndC+0LLQsNGPINC30LDRj9Cy0LrQsCDRgSDRgdCw0LnRgtCwINCc0LXQsdC10LvRjCBIb21lJyxcbiAgICBodG1sOiBgXG4gICAgICA8aDI+0J3QvtCy0LDRjyDQt9Cw0Y/QstC60LAg0YEg0YHQsNC50YLQsDwvaDI+XG4gICAgICA8cD48c3Ryb25nPtCY0LzRjzo8L3N0cm9uZz4gJHtuYW1lfTwvcD5cbiAgICAgIDxwPjxzdHJvbmc+0KLQtdC70LXRhNC+0L06PC9zdHJvbmc+ICR7cGhvbmV9PC9wPlxuICAgICAgJHttZXNzYWdlID8gYDxwPjxzdHJvbmc+0KHQvtC+0LHRidC10L3QuNC1Ojwvc3Ryb25nPiAke21lc3NhZ2V9PC9wPmAgOiAnJ31cbiAgICAgIDxwPjxlbT7QlNCw0YLQsCDQvtGC0L/RgNCw0LLQutC4OiAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ3J1LVJVJyl9PC9lbT48L3A+XG4gICAgYCxcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCfQntGC0L/RgNCw0LLQutCwINC/0LjRgdGM0LzQsC4uLicpO1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJ9Cf0LjRgdGM0LzQviDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QvicpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0L/RgNC4INC+0YLQv9GA0LDQstC60LUg0L/QuNGB0YzQvNCwOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gc2VuZCBlbWFpbCcgfTtcbiAgfVxufSAiXSwibmFtZXMiOlsibm9kZW1haWxlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwiQVBQX1BBU1MiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJzZW5kRW1haWwiLCJkYXRhIiwibmFtZSIsInBob25lIiwibWVzc2FnZSIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJsb2ciLCJpbmZvIiwic2VuZE1haWwiLCJzdWNjZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/mailer.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=E%3A%5Cfurniture-landing-source-updated%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfurniture-landing-source-updated&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();