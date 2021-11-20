import { css } from '@emotion/react';

const customStyles = css`
  body > .react-toast-notifications__container {
    z-index: 5000;
  }
  /* datepicker popup */
  div {
    .rs-picker.rs-picker-date .rs-picker-toggle,
    .rs-picker.rs-picker-daterange .rs-picker-toggle {
      padding: 0 !important;
      border: 0 !important;
      background-color: transparent !important;
      box-shadow: none;
    }
    .rs-picker.rs-picker-date .rs-picker-toggle .rs-picker-toggle-placeholder,
    .rs-picker.rs-picker-date .rs-picker-toggle input,
    .rs-picker.rs-picker-daterange .rs-picker-toggle .rs-picker-toggle-placeholder,
    .rs-picker.rs-picker-daterange .rs-picker-toggle input {
      position: relative;
      height: 3.4rem;
      padding: 1rem 2rem 1rem 1.4rem;
      line-height: 3.4rem;
    }
    .rs-picker.rs-picker-date .rs-picker-toggle input,
    .rs-picker.rs-picker-daterange .rs-picker-toggle input {
      border: 1px solid transparent;
      border-bottom-color: #d8d8d8;
      opacity: 1;
      background: transparent;
    }
    .rs-picker.rs-picker-date .rs-picker-toggle input {
      width: auto;
      margin-right: -55px;
    }
    .rs-picker.rs-picker-date .rs-picker-toggle .rs-picker-toggle-placeholder,
    .rs-picker.rs-picker-daterange .rs-picker-toggle .rs-picker-toggle-placeholder {
      z-index: 21;
      top: 1px;
      display: none;
      width: 100%;
      padding: 0 2.7rem 0 0.7rem;
      line-height: 3.2rem;
    }
    .rs-picker.rs-picker-date .rs-picker-toggle,
    .rs-picker.rs-picker-daterange .rs-picker-toggle {
      padding: 0 !important;
      border: 0 !important;
      background-color: transparent !important;
      box-shadow: none;
    }
    .rs-picker.rs-picker-date .rs-picker-toggle .rs-picker-toggle-value,
    .rs-picker.rs-picker-daterange .rs-picker-toggle .rs-picker-toggle-value {
      display: none;
    }
    &.rs-picker-menu {
      border: 1px solid #e5e5e5;
      border-radius: 2rem;
      box-shadow: none;
      &:not(.rs-picker-daterange-menu) {
        .rs-calendar {
          .rs-calendar-view {
            .rs-calendar-table {
              .rs-calendar-table-row {
                .rs-calendar-table-cell {
                  &:before {
                    display: none;
                  }
                }
              }
            }
          }
        }
      }

      .rs-picker-daterange-header {
        display: none;
      }

      .rs-picker-daterange-calendar-group {
        display: flex;
        height: 30.8rem;
      }

      .rs-calendar {
        width: 24.6rem;
        height: 100%;
        min-height: auto;
        padding-bottom: 0;
        &:first-child {
          border-right: 1px solid #e5e5e5;
        }
        .rs-calendar-header {
          width: 24rem;
          margin: 0 auto;
          padding: 0 0 0.3rem 0;
          border-bottom: 1px solid #e5e5e5;
          .rs-calendar-header-month-toolbar {
            @include set-flex(row, center, center);
            height: 3.4rem;
            padding: 0;
            &::before,
            &::after {
              display: none;
            }
            float: none;
            .rs-calendar-header-backward {
              float: none;
              width: 1.8rem;
              height: 1.9rem;
              padding: 0;
              background: asset-image('ic_calender_left.png') no-repeat center / 1.8rem 1.9rem;
              box-shadow: none;
              svg {
                display: none;
              }
            }
            .rs-calendar-header-title {
              width: 13rem;
              margin: 0 4rem;
              padding: 0;
              @include set-font(2rem, 700, rgba(0, 0, 0, 0.9), normal);
              &:focus {
                border-radius: 0.6rem;
                background-color: #e5e5e5;
                box-shadow: none;
              }
            }
            .rs-calendar-header-forward {
              float: none;
              width: 1.8rem;
              height: 1.9rem;
              padding: 0;
              background: asset-image('ic_calender_right.png') no-repeat center / 1.8rem 1.9rem;
              box-shadow: none;
              svg {
                display: none;
              }
            }
          }
        }

        .rs-calendar-view {
          padding: 1.3rem 1.5rem 1.3rem;
          .rs-calendar-table {
            display: block;
            .rs-calendar-table-row {
              @include set-flex(row, space-between, center);
              height: 3rem;
              margin-top: 0.6rem;
              &:first-child {
                margin-top: 0;
              }

              /* 요일 */
              &.rs-calendar-table-header-row {
                height: auto;
                .rs-calendar-table-cell {
                  height: auto;
                  &:first-child {
                    .rs-calendar-table-cell-content {
                      color: #f24851;
                    }
                  }
                  &:hover {
                    .rs-calendar-table-cell-content {
                      height: auto;
                      background-color: transparent;
                    }
                  }
                  .rs-calendar-table-cell-content {
                    height: auto;
                    line-height: normal;
                  }
                }
              }

              .rs-calendar-table-cell {
                width: 3.1rem;
                height: 3.1rem;
                &:first-child {
                  &:before {
                    border-top-left-radius: 20.5px;
                    border-bottom-left-radius: 20.5px;
                  }
                  .rs-calendar-table-cell-content {
                    color: #f24851;
                  }
                }

                &:last-child {
                  &:before {
                    border-top-right-radius: 20.5px;
                    border-bottom-right-radius: 20.5px;
                  }
                }

                &:hover {
                  .rs-calendar-table-cell-content {
                    height: 3.1rem;
                    background-color: #ff9a9e;
                  }
                }

                &:before {
                  opacity: 0.3;
                  top: 0;
                  left: -0.1rem;
                  width: calc(100% + 0.2rem);
                  height: calc(100% + 0.2rem);
                  margin: 0;
                  background-color: #f8c4c6;
                }

                // 오늘
                // by 최현일
                // 대체 왜 today만 따로 강조를 하는거야 대체 왜
                /* &.rs-calendar-table-cell-is-today {
                  .rs-calendar-table-cell-content {
                    color: #fff;
                    background-color: #f24851;
                  }
                } */

                // 날짜 선택
                &.rs-calendar-table-cell-selected {
                  .rs-calendar-table-cell-content {
                    background-color: #f8c4c6;
                    color: #fff;
                  }
                }

                // 날짜 범위 시작
                &.rs-calendar-table-cell-selected-start {
                  &:before {
                    border-top-left-radius: 20.5px;
                    border-bottom-left-radius: 20.5px;
                  }
                }

                // 날짜 범위 종료
                &.rs-calendar-table-cell-selected-end {
                  &:before {
                    border-top-right-radius: 20.5px;
                    border-bottom-right-radius: 20.5px;
                  }
                }

                // 날짜 범위
                &.rs-calendar-table-cell-in-range {
                  &:hover {
                    &:before {
                      content: '';
                      display: block;
                      opacity: 0.3;
                      top: 0;
                      left: -0.1rem;
                      width: calc(100% + 0.2rem);
                      height: calc(100% + 0.2rem);
                      margin: 0;
                      background-color: #f8c4c6;
                    }
                  }
                }

                .rs-calendar-table-cell-content {
                  width: 100%;
                  height: 3.1rem;
                  padding: 0;
                  border: 0;
                  border-radius: 100%;
                  box-shadow: none;
                  @include set-font(1.4rem, 400, rgba(0, 0, 0, 0.9), 3.1rem);
                }
              }
            }
          }
        }
      }

      .rs-picker-toolbar {
        margin-top: 0;
        border-top: 1px solid #e5e5e5;
        padding: 1rem 1.5rem;
        .rs-btn {
          background-color: #eee;
          border-radius: 0.6rem;
          @include set-font(1.3rem, normal, $font-color, normal);
          &.rs-btn-primary {
            background-color: $primary;
            color: rgba(1, 1, 1, 0.9);
          }
        }
        .rs-picker-toolbar-ranges {
          margin: 0 -0.5rem;
          .rs-btn {
            margin: 0 0.5rem;
            &:hover {
              text-decoration: none;
            }
          }
        }
      }

      .rs-calendar-month-dropdown {
        top: 5.6rem;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;

        .rs-calendar-month-dropdown-row {
          padding: 0.6rem 1.8rem 0.6rem 6.2rem;
          border-bottom: 1px solid #e5e5e5;
          &:last-child {
            border-bottom: 0;
          }
          .rs-calendar-month-dropdown-year {
            @include set-font(1.4rem, 700, rgba(0, 0, 0, 0.9), normal);
            &.rs-calendar-month-dropdown-year-active {
              color: #ff9a9e;
            }
          }

          .rs-calendar-month-dropdown-list {
            @include set-flex(row, space-between, center);
            flex-wrap: wrap;
            width: 100%;

            .rs-calendar-month-dropdown-cell {
              float: none;
              margin: 0;
              &.rs-calendar-month-dropdown-cell-active {
                .rs-calendar-month-dropdown-cell-content {
                  background-color: #ff9a9e;
                }
              }

              &.disabled {
                .rs-calendar-month-dropdown-cell-content {
                  text-decoration: none;
                  color: rgba(0, 0, 0, 0.4) !important;
                  background-color: transparent !important;
                }
              }
              .rs-calendar-month-dropdown-cell-content {
                padding: 0;
                border-radius: 100%;
                @include set-font(1.4rem, 400, rgba(0, 0, 0, 0.9), 3.2rem);
                &:hover {
                  background-color: #ff9a9e;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default customStyles;
