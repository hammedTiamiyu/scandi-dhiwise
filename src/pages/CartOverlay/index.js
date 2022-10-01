import React from "react";

import { Stack, Column, Row, Text, Line, Img, List, Button } from "components";

const CartOverlayPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-raleway lg:h-[1177px] xl:h-[1346px] 2xl:h-[1515px] 3xl:h-[1817px] mx-[auto] w-[100%]">
        <Column className="absolute items-center top-[0] w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 justify-end lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] w-[100%]">
              <div className="bg-green_400 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[1%]"></div>
              <Column className="items-center mt-[4px] w-[5%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_400 uppercase w-[auto]">
                  Women
                </Text>
                <Line className="bg-green_400 h-[2px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
              </Column>
              <div className="bg-green_400 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[1%]"></div>
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 uppercase w-[auto]">
                Men
              </Text>
              <Text className="font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 uppercase w-[auto]">
                Kids
              </Text>
              <Img
                src="images/img_group.png"
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[298px] xl:ml-[341px] 2xl:ml-[384px] 3xl:ml-[461px] mt-[4px] w-[2%]"
                alt="Group"
              />
              <Stack className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[406px] xl:ml-[465px] 2xl:ml-[523px] 3xl:ml-[627px] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[75px] w-[7%]">
                <Row className="absolute bottom-[0] font-raleway items-center justify-evenly left-[0] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[86%]">
                  <Text className="font-medium my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    $
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] w-[8%]"
                    alt="arrowdown"
                  />
                  <Img
                    src="images/img_cart.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mt-[1px] w-[27%]"
                    alt="cart"
                  />
                </Row>
                <Text className="absolute bg-gray_900 flex font-bold font-roboto items-center lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] right-[0] rounded-radius50 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 top-[0] uppercase w-[20px]">
                  3
                </Text>
              </Stack>
            </Row>
          </header>
          <Column className="3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] w-[86%]">
            <Text className="font-normal ml-[1px] not-italic lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-gray_900 w-[auto]">
              Category name
            </Text>
            <Row className="items-center justify-between 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] w-[100%]">
              <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[31%]">
                <Img
                  src="images/img_productd.png"
                  className="lg:h-[257px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] w-[100%]"
                  alt="ProductD"
                />
                <Text className="font-light lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Apollo Running Short
                </Text>
                <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  $50.00
                </Text>
              </Column>
              <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[31%]">
                <Stack
                  className="bg-cover bg-repeat lg:h-[257px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_productd.png')" }}
                >
                  <Img
                    src="images/img_productb.png"
                    className="absolute lg:h-[257px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] w-[100%]"
                    alt="ProductB"
                  />
                </Stack>
                <Text className="font-light lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Apollo Running Short
                </Text>
                <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  $50.00
                </Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[31%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  Size:
                </Text>
                <Column className="lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_330X354.png')",
                    }}
                  >
                    <Column
                      className="bg-cover bg-repeat items-center w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group14.png')",
                      }}
                    >
                      <Column className="bg-white_A700_87 items-center justify-center 3xl:p-[108px] lg:p-[70px] xl:p-[80px] 2xl:p-[90px] w-[100%]">
                        <Text className="font-normal lg:my-[48px] xl:my-[55px] 2xl:my-[62px] 3xl:my-[74px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_400 w-[auto]">
                          OUT OF STOCK
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Text className="font-light lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Apollo Running Short
                  </Text>
                  <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    $50.00
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-between 2xl:mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] w-[100%]">
              <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] shadow-bs w-[31%]">
                <Stack className="lg:h-[277px] xl:h-[317px] 2xl:h-[357px] 3xl:h-[428px] w-[100%]">
                  <Img
                    src="images/img_producta_330X354.png"
                    className="absolute lg:h-[257px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] top-[0] w-[100%]"
                    alt="ProductA"
                  />
                  <Img
                    src="images/img_cart_52X52.svg"
                    className="absolute bottom-[0] lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] right-[4%] lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[62px]"
                    alt="cart One"
                  />
                </Stack>
                <Text className="font-light lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Apollo Running Short
                </Text>
                <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  $50.00
                </Text>
              </Column>
              <List
                className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] w-[66%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Img
                    src="images/img_productd.png"
                    className="lg:h-[257px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] w-[100%]"
                    alt="ProductD One"
                  />
                  <Text className="font-light lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Apollo Running Short
                  </Text>
                  <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    $50.00
                  </Text>
                </Column>
                <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Img
                    src="images/img_productc_330X354.png"
                    className="lg:h-[257px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] w-[100%]"
                    alt="ProductC"
                  />
                  <Text className="font-light lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Apollo Running Short
                  </Text>
                  <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    $50.00
                  </Text>
                </Column>
              </List>
            </Row>
          </Column>
        </Column>
        <Column className="absolute bg-gray_800_38 bottom-[0] items-end lg:pb-[56px] xl:pb-[64px] 2xl:pb-[72px] 3xl:pb-[86px] lg:px-[56px] xl:px-[64px] 2xl:px-[72px] 3xl:px-[86px] w-[100%]">
          <Column className="bg-white_A700 justify-end lg:mb-[533px] xl:mb-[610px] 2xl:mb-[686px] 3xl:mb-[823px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[25%]">
            <Text className="font-medium lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              <span className="text-gray_900 font-raleway font-bold">
                My Bag
              </span>
              <span className="text-gray_900 font-raleway">, </span>
              <span className="text-gray_900 font-raleway">3</span>
              <span className="text-gray_900 font-raleway"> items</span>
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-center justify-evenly lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[46%]">
                  <Text className="font-light leading-[160.00%] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[79%]">
                    Apollo
                    <br />
                    Running Short
                  </Text>
                  <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    $50.00
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Size:
                  </Text>
                  <Row className="font-sourcesanspro items-center mr-[auto] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[92%]">
                    <Text className="bg-white_A700_33 border border-gray_900 border-solid flex font-normal items-center not-italic pl-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[24px]">
                      XS
                    </Text>
                    <Button
                      className="font-normal lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      size="sm"
                      variant="OutlineGray900"
                    >
                      S
                    </Button>
                    <Button
                      className="bg-white_A700_33 font-normal lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_900 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      size="sm"
                    >
                      M
                    </Button>
                    <Button
                      className="bg-white_A700_33 font-normal lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_900 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      size="sm"
                    >
                      L
                    </Button>
                  </Row>
                  <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Color:
                  </Text>
                  <Img
                    src="images/img_frame15.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[52%]"
                    alt="FrameFifteen"
                  />
                </Column>
                <Column className="items-center w-[8%]">
                  <Img
                    src="images/img_plus.svg"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="plus"
                  />
                  <Text className="font-medium lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    1
                  </Text>
                  <Button
                    className="flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[100%]"
                    size="smIcn"
                    variant="icbOutlineGray900"
                  >
                    <Img
                      src="images/img_minussquare.svg"
                      className="flex items-center justify-center"
                      alt="minussquare"
                    />
                  </Button>
                </Column>
                <Img
                  src="images/img_productd_190X121.png"
                  className="lg:h-[148px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] w-[41%]"
                  alt="ProductD Two"
                />
              </Row>
              <Row className="items-center justify-evenly lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[46%]">
                  <Text className="font-light leading-[160.00%] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[51%]">
                    Jupiter
                    <br />
                    Wayfarer
                  </Text>
                  <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    $75.00
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Size:
                  </Text>
                  <Row className="font-sourcesanspro items-center mr-[auto] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[43%]">
                    <Button
                      className="font-normal lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      size="sm"
                      variant="OutlineGray900"
                    >
                      S
                    </Button>
                    <Button
                      className="bg-white_A700_33 font-normal lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_900 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      size="sm"
                    >
                      M
                    </Button>
                  </Row>
                  <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Color:
                  </Text>
                  <Img
                    src="images/img_videocamera.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[52%]"
                    alt="videocamera"
                  />
                </Column>
                <Column className="items-center w-[8%]">
                  <Img
                    src="images/img_plus.svg"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="plus One"
                  />
                  <Text className="font-medium lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    2
                  </Text>
                  <Button
                    className="flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[100%]"
                    size="smIcn"
                    variant="icbOutlineGray900"
                  >
                    <Img
                      src="images/img_minussquare.svg"
                      className="flex items-center justify-center"
                      alt="minussquare One"
                    />
                  </Button>
                </Column>
                <Img
                  src="images/img_productd_1.png"
                  className="lg:h-[148px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] w-[41%]"
                  alt="ProductD Three"
                />
              </Row>
            </List>
            <Row className="justify-between lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[99%]">
              <Text className="font-medium font-roboto mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                Total
              </Text>
              <Text className="font-bold font-raleway mb-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                $200.00
              </Text>
            </Row>
            <Row className="items-center justify-between lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
              <Button className="bg-white_A700 font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_900 uppercase w-[48%]">
                View bag
              </Button>
              <Button
                className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center uppercase w-[48%]"
                variant="FillGreen400"
              >
                CHECK OUT
              </Button>
            </Row>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default CartOverlayPage;
