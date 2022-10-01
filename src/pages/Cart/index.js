import React from "react";

import { Column, Row, Text, Line, Img, Stack, List, Button } from "components";

const CartPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-raleway items-center mx-[auto] lg:pb-[213px] xl:pb-[243px] 2xl:pb-[274px] 3xl:pb-[328px] w-[100%]">
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
            <Stack className="font-roboto lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[406px] xl:ml-[465px] 2xl:ml-[523px] 3xl:ml-[627px] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[75px] w-[7%]">
              <Column className="absolute bg-gray_900 lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-end px-[2px] right-[0] rounded-radius50 top-[0] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]">
                <Text className="font-bold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 uppercase w-[auto]">
                  3
                </Text>
              </Column>
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
            </Stack>
          </Row>
        </header>
        <Column className="lg:mt-[64px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[86%]">
          <Text className="font-bold font-raleway lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_900 uppercase w-[auto]">
            Cart
          </Text>
          <List
            className="font-raleway gap-[0] min-h-[auto] 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center justify-evenly lg:my-[19px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[29px] w-[100%]">
              <Column className="w-[78%]">
                <Text className="font-raleway font-semibold ml-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                  Apollo
                </Text>
                <Text className="font-normal font-raleway ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                  Running Short
                </Text>
                <Text className="font-bold font-raleway lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  $50.00
                </Text>
                <Text className="font-bold font-robotocondensed lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  SIZE:
                </Text>
                <Row className="font-sourcesanspro items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[28%]">
                  <Button className="bg-white_A700 font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 tracking-ls1 w-[23%]">
                    XS
                  </Button>
                  <Button
                    className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[23%]"
                    variant="OutlineGray900"
                  >
                    S
                  </Button>
                  <Button className="bg-white_A700 font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 tracking-ls1 w-[23%]">
                    M
                  </Button>
                  <Button className="bg-white_A700 font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 tracking-ls1 w-[23%]">
                    L
                  </Button>
                </Row>
                <Text className="font-bold font-robotocondensed ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  COLOR:
                </Text>
                <Img
                  src="images/img_frame17.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[12%]"
                  alt="FrameSeventeen"
                />
              </Column>
              <Column className="w-[6%]">
                <Img
                  src="images/img_plus.svg"
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="plus"
                />
                <Text className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[87px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  1
                </Text>
                <Button
                  className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center 3xl:mt-[103px] lg:mt-[66px] xl:mt-[76px] 2xl:mt-[86px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  size="mdIcn"
                  variant="icbOutlineGray900"
                >
                  <Img
                    src="images/img_minussquare.svg"
                    className="flex items-center justify-center"
                    alt="minussquare"
                  />
                </Button>
              </Column>
              <Stack
                className="bg-cover bg-repeat lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[16%]"
                style={{ backgroundImage: "url('images/img_group8.png')" }}
              >
                <Img
                  src="images/img_videocamera_24X56.svg"
                  className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] right-[0] w-[28%]"
                  alt="videocamera"
                />
              </Stack>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_300" />
            <Row className="items-center justify-evenly lg:my-[19px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[29px] w-[100%]">
              <Column className="w-[78%]">
                <Text className="font-raleway font-semibold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                  Jupiter
                </Text>
                <Text className="font-normal font-raleway xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                  Wayfarer
                </Text>
                <Text className="font-bold font-raleway lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  $75.00
                </Text>
                <Text className="font-bold font-robotocondensed lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  SIZE:
                </Text>
                <Row className="font-sourcesanspro items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[14%]">
                  <Button className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 tracking-ls1 w-[47%]">
                    S
                  </Button>
                  <Button
                    className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[47%]"
                    variant="OutlineGray900"
                  >
                    M
                  </Button>
                </Row>
                <Text className="font-bold font-robotocondensed lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  COLOR:
                </Text>
                <Img
                  src="images/img_frame17_green_400.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[12%]"
                  alt="FrameSeventeen One"
                />
              </Column>
              <Column className="w-[6%]">
                <Img
                  src="images/img_plus.svg"
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="plus One"
                />
                <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[87px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  2
                </Text>
                <Button
                  className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center 3xl:mt-[103px] lg:mt-[66px] xl:mt-[76px] 2xl:mt-[86px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  size="mdIcn"
                  variant="icbOutlineGray900"
                >
                  <Img
                    src="images/img_minussquare_black_900.svg"
                    className="flex items-center justify-center"
                    alt="minussquare One"
                  />
                </Button>
              </Column>
              <Stack
                className="bg-cover bg-repeat lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[16%]"
                style={{ backgroundImage: "url('images/img_group9.png')" }}
              >
                <Img
                  src="images/img_videocamera_24X56.svg"
                  className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] right-[0] w-[28%]"
                  alt="videocamera One"
                />
              </Stack>
            </Row>
          </List>
          <Text className="font-normal font-roboto lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
            <span className="text-gray_900 font-raleway">Tax 21%: </span>
            <span className="text-gray_900 font-raleway font-bold">$</span>
            <span className="text-gray_900 font-raleway font-bold">42.00</span>
          </Text>
          <Text className="font-normal font-roboto xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
            <span className="text-gray_900 font-raleway">Quantity: </span>
            <span className="text-gray_900 font-raleway font-bold">3</span>
          </Text>
          <Row className="font-raleway lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[16%]">
            <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
              Total:
            </Text>
            <Text className="font-bold mb-[1px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
              $200.00
            </Text>
          </Row>
          <Button
            className="font-raleway font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center uppercase w-[23%]"
            variant="FillGreen400"
          >
            ORDER
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default CartPage;
