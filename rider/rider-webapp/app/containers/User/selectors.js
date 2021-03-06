/*
 * <<
 * wormhole
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import { createSelector } from 'reselect'

const selectUser = () => (state) => state.get('user')

const selectUsers = () => createSelector(
  selectUser(),
  (userState) => userState.get('users')
                  ? userState.get('users').map(item => {
                    item.key = item.id
                    return item
                  })
                  : []
)

const selectError = () => createSelector(
  selectUser(),
  (userState) => userState.get('error')
)

const selectModalLoading = () => createSelector(
  selectUser(),
  (userState) => userState.get('modalLoading')
)

export {
  selectUser,
  selectUsers,
  selectError,
  selectModalLoading
}
