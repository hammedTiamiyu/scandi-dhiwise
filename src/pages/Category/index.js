import React from "react";

import { Column, Row, Text, Line, Img, Stack, List } from "components";

const CategoryPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-raleway items-center mx-[auto] lg:pb-[148px] xl:pb-[169px] 2xl:pb-[191px] 3xl:pb-[229px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 lg:pt-[22px] xl:pt-[25px] 2xl:pt-[29px] 3xl:pt-[34px] lg:px-[22px] xl:px-[25px] 2xl:px-[29px] 3xl:px-[34px] w-[100%]">
            <div className="bg-green_400 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[1%]"></div>
            <Column className="items-center w-[5%]">
              <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_400 uppercase w-[auto]">
                Women
              </Text>
              <Line className="bg-green_400 h-[2px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
            </Column>
            <div className="bg-green_400 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[1%]"></div>
            <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 uppercase w-[auto]">
              Men
            </Text>
            <Text className="font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 uppercase w-[auto]">
              Kids
            </Text>
            <Img
              src="images/img_group.png"
              className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[298px] xl:ml-[341px] 2xl:ml-[384px] 3xl:ml-[461px] mt-[1px] w-[2%]"
              alt="Group"
            />
            <Text className="font-medium lg:ml-[414px] xl:ml-[474px] 2xl:ml-[533px] 3xl:ml-[639px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
              $
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[6px]"
              alt="arrowdown"
            />
            <Img
              src="images/img_cart.svg"
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[4px] w-[1%]"
              alt="cart"
            />
          </Row>
        </header>
        <Column className="3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] w-[86%]">
          <Text className="font-normal ml-[1px] not-italic lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-gray_900 w-[auto]">
            Category name
          </Text>
          <Row className="items-center justify-between 2xl:mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] w-[100%]">
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
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[31%]">
              <Column
                className="bg-cover bg-repeat items-center w-[100%]"
                style={{ backgroundImage: "url('images/img_image.png')" }}
              >
                <Column
                  className="bg-cover bg-repeat items-center w-[100%]"
                  style={{ backgroundImage: "url('images/img_group11.png')" }}
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
              <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                $50.00
              </Text>
            </Column>
          </Row>
          <Row className="items-center justify-between 2xl:mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] w-[100%]">
            <Column className="items-center shadow-bs w-[31%]">
              <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] shadow-bs w-[100%]">
                <Stack className="lg:h-[277px] xl:h-[317px] 2xl:h-[357px] 3xl:h-[428px] w-[100%]">
                  <Img
                    src="images/img_producta.png"
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
                  src="images/img_productc.png"
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
    </>
  );
};

export default CategoryPage;
