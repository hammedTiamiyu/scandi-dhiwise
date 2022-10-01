import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Line,
  Img,
  SelectBox,
  List,
} from "components";

const CurrencySwitcherPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-raleway items-center mx-[auto] lg:pb-[148px] xl:pb-[169px] 2xl:pb-[191px] 3xl:pb-[229px] w-[100%]">
        <Stack className="lg:h-[182px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] w-[100%]">
          <Text className="absolute bottom-[6%] font-normal left-[7%] not-italic lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-gray_900 w-[auto]">
            Category name
          </Text>
          <Stack className="absolute lg:h-[182px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] w-[100%]">
            <Row className="absolute bg-white_A700 lg:pt-[22px] xl:pt-[25px] 2xl:pt-[29px] 3xl:pt-[34px] lg:px-[22px] xl:px-[25px] 2xl:px-[29px] 3xl:px-[34px] top-[0] w-[100%]">
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
              <SelectBox
                className="font-medium lg:ml-[414px] xl:ml-[474px] 2xl:ml-[533px] 3xl:ml-[639px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[2%]"
                placeholderClassName="text-gray_900"
                name="GroupOne"
                placeholder="$"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="mr-[0] lg:w-[4px] lg:h-[3px] xl:w-[5px] xl:h-[3px] 2xl:w-[6px] 2xl:h-[4px] 3xl:w-[7px] 3xl:h-[4px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Img
                src="images/img_cart.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[4px] w-[1%]"
                alt="cart"
              />
            </Row>
            <Column className="absolute bg-white_A700 bottom-[0] justify-end lg:py-[19px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] right-[5%] w-[8%]">
              <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                $ USD
              </Text>
              <Text className="bg-gray_200 font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pl-[15px] xl:pl-[17px] 2xl:pl-[20px] 3xl:pl-[24px] lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[114px]">
                € EUR
              </Text>
              <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                ¥ JPY
              </Text>
            </Column>
          </Stack>
        </Stack>
        <List
          className="gap-[0] min-h-[auto] 3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] 2xl:mt-[97px] w-[86%]"
          orientation="vertical"
        >
          <Row className="items-center justify-between lg:my-[40px] xl:my-[45px] 2xl:my-[51px] 3xl:my-[61px] w-[100%]">
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
            <Column className="lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] shadow-bs w-[31%]">
              <Img
                src="images/img_producta_1.png"
                className="lg:h-[257px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] w-[100%]"
                alt="ProductA"
              />
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
                style={{ backgroundImage: "url('images/img_image_1.png')" }}
              >
                <Column
                  className="bg-cover bg-repeat items-center w-[100%]"
                  style={{ backgroundImage: "url('images/img_group7.png')" }}
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
          <Row className="items-center justify-between lg:my-[40px] xl:my-[45px] 2xl:my-[51px] 3xl:my-[61px] w-[100%]">
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[31%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[257px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] w-[100%]"
                style={{ backgroundImage: "url('images/img_productd.png')" }}
              >
                <Img
                  src="images/img_productb_330X354.png"
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
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[31%]">
              <Img
                src="images/img_productc_1.png"
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
          </Row>
        </List>
      </Column>
    </>
  );
};

export default CurrencySwitcherPage;
