<template>
  <div>
    <div class="freeMailTokenIndex" v-if="sharePage">
      <div class="banner_top">
        <div class="banner_top_item">环球免邮令牌</div>
        <div class="banner_top_item" v-for="(item,index) in navBarData">
              <span class="delimiterLineSpan">
                {{item.cell_sub_titles[0]}}
              </span>
        </div>
      </div>
      <div v-for="(item,index) in goodsList">
        <div class="mainTitleImgBox">
          <img :src="item.bannerImg">
        </div>
        <div class="firstGoodsBox" ref="firstGoodsBox">
          <div class="goodsItem" v-for="i in item.productList">
            <div class="goodsItemDetail">
              <div class="goodsItemDetail_img">
                <img :src="i.cell_image_urls[0]">
              </div>
              <div class="goodsItemDetail_subtitle">
                {{i.cell_sub_titles[0]}}
              </div>
              <div class="goodsItemDetail_btn">
                    <span class="price">
                      {{i.cell_sub_titles[1]}}
                    </span>
                <span class="btn">立即购买</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import _ from 'lodash'
  import axios from 'axios'
  export default {
    components: {},
    data() {
      return {
        sharePage: null,
        navBarData: null,
        goodsList: []
      }
    },
    computed: {},
    methods: {},
    created() {
      const authOptions = {
        method: 'GET',
        url: 'https://api-test.glbuyer.com/v1/activity/promoterViewShippingFree4px/kyigi',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      axios(authOptions).then((res) => {
        console.log(res)
        const code = res.data.code
        if (code === 0) {
          this.sharePage = res.data.data
          console.log('this.sharePage ', this.sharePage)
          this.navBarData = this.sharePage.navigation_bar
          _.map(this.sharePage.components, (item, index) => {
            if (index % 2 === 0) {
              console.log('curIndex', index)
              /* 偶素 */
              const itemData = {
                i: index,
                bannerImg: item.cells[0].cell_image_urls[0],
                productList: []
              }
              console.log(itemData)
              this.goodsList.push(itemData)
            }
          })
          _.forEach(this.goodsList, (item) => {
            item.productList = this.sharePage.components[item.i + 1].content_cells
          })
        }
      })
    },
  }
</script>
<style lang='scss' scoped>
  .ruleBox {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    padding-top: 1rem;
    .closeIcon {
      margin-bottom: 0.5rem;
      height: 0.6rem;
      width: 100%;
      .signBox_head_icon_bg {
        float: right;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background: honeydew;
      }
    }
    .arguBox {
      background: white;
      width: 6rem;
      height: 8rem;
      border-radius: 0.1rem;
      margin: 0 auto;
      padding: 0.3rem;
      overflow: scroll;
      .tc {
        text-align: center;
      }
    }
  }

  .freeMailTokenIndex {
    /*
        margin-top: 44px;
    */
    overflow: scroll;
    background: white;
    img {
      width: 100%;
    }
    .banner_top {
      width: 100%;
      height: 0.6rem;
      display: inline-table;
      .banner_top_item {
        /*
                width: 1.6rem;
        */
        height: 0.6rem;
        line-height: 0.65rem;
        font-size: 0.2rem;
        letter-spacing: 0;
        text-align: center;
        display: inline-block;
        color: #4A4A4A;
        .delimiterLineSpan {
          padding: 0 0.15rem 0 0.13rem;
          height: 0.3rem;
          line-height: 0.3rem;
          border-right: 0.02rem solid #979797;
        }
      }
      .banner_top_item:first-child {
        padding: 0 0.15rem;
        background: #9BC8FF;
        color: #FFFFFF;
        letter-spacing: 0;
      }
    }
    .advertisementBox {
      width: 100%;
      height: 9.86rem;
      background-size: cover;
      position: relative;
      .activeRule {
        position: absolute;
        top: 3.17rem;
        text-align: center;
        width: 100%;
        height: 0.26rem;
        line-height: 0.26rem;
        span {
          color: white;
          border-bottom: 0.01rem solid white;
          font-size: 0.24rem;
        }
      }
      .wantTofreeMailBtn {
        width: 1.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
        border-radius: 0.05rem;
        background-color: #ffb321;
        color: white;
        font-size: 0.28rem;
        text-align: center;
        position: absolute;
        left: 0.93rem;
        bottom: 1.5rem;
      }
      .shieldBox {
        position: absolute;
        bottom: 0px;
        right: 0.1rem;
        width: 3.79rem;
        height: 4.63rem;
      }
      .yellowShield {
        background-size: cover;
      }
      .violetShield {
        background-size: cover;
      }
      .pinkShield {
        background-size: cover;
      }
      .totalPeopleNum {
        height: 0.36rem;
        line-height: 0.36rem;
        margin-top: 1.5rem;
        font-size: 0.2rem;
        text-align: center;
        color: #ffffff;
        text-shadow: 0 0.02rem 0.04rem rgba(155, 155, 155, 0.5);
      }
      .lackPeopleNum {
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.32rem;
        font-weight: 300;
        text-align: center;
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(155, 155, 155, 0.5);
      }
      .upgradeKg {
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.32rem;
        text-align: center;
        color: #ffffff;
        font-weight: 300;
        text-shadow: 0 2px 4px rgba(155, 155, 155, 0.5);
        .upgradeKg_txt {
          font-weight: 600;
        }
      }
      .checkTofreeMailBtn {
        width: 1.02rem;
        height: 0.37rem;
        line-height: 0.37rem;
        border-radius: 0.04rem;
        border: solid 0.01rem #ffffff;
        font-size: 0.24rem;
        text-align: center;
        color: #ffffff;
        margin: 0 auto;
        margin-top: 0.1rem;
      }
    }
    .mainTitleImgBox {
      width: 100%;
      height: 2.8rem;
      background: lavenderblush;
    }
    .firstGoodsBox, .secondGoodsBox {
      background: #DFEEFF;
      width: 100%;
      height: 12.32rem;
      .goodsItem {
        background: #DFEEFF;
        width: 50%;
        float: left;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .goodsItemDetail {
          width: 3.26rem;
          height: 5.35rem;
          background: white;
          .goodsItemDetail_img {
            height: 3.83rem;
            width: 100%;
            background: white;
            border-bottom: 0.02rem dashed #FFBBD6;
          }
          .goodsItemDetail_subtitle {
            padding: 0 0.2rem;
            height: 0.60rem;
            line-height: 0.3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 0.25rem;
            color: #4A4A4A;
            letter-spacing: 0;
            margin-bottom: 0.2rem;
            margin-top: 0.19rem;
          }
          .goodsItemDetail_btn {
            padding: 0 0.2rem;
            display: flex;
            justify-content: space-between;
            height: 0.4rem;
            line-height: 0.4rem;
            .price {
              font-size: 0.28rem;
              color: #EF4913;
              letter-spacing: 0;
            }
            .btn {
              width: 1.2rem;
              height: 0.4rem;
              background: #FF6D6D;
              border-radius: 0.05rem;
              color: white;
              font-size: 0.24rem;
              text-align: center;
            }
          }
        }
      }
    }
    .secondGoodsBox {
      width: 100%;
      height: 12.32rem;
      background-color: #fffafc;
      .goodsItem {
        background: #fffafc;
      }
    }

  }
</style>
