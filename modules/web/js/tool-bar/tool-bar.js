/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define(['require', 'logger', 'jquery', 'lodash', 'backbone', /* void modules */ 'jquery_ui'],

    function (require, log, $, _, Backbone) {

        var ToolBar = Backbone.View.extend(
        /** @lends ToolBar.prototype */
        {
            /**
             * @augments Backbone.View
             * @constructs
             * @class ToolBar
             * @param {Object} config configuration options for the ToolBar
             */
            initialize: function (config) {

            },
            render: function () {
            }

        });

        return ToolBar;
});