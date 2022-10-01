import React from "react";

import { Column, Row, Text, Line, Img, Stack, Input, Button } from "components";

const PDPPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-raleway mx-[auto] lg:pb-[143px] xl:pb-[164px] 2xl:pb-[185px] 3xl:pb-[222px] w-[100%]">
        <Column className="items-center w-[100%]">
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
        </Column>
        <Row className="2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[78%]">
          <Column className="w-[11%]">
            <Img
              src="images/img_productd.png"
              className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] w-[66%]"
              alt="ProductD"
            />
            <Img
              src="images/img_productd.png"
              className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[66%]"
              alt="ProductD One"
            />
            <Img
              src="images/img_productd.png"
              className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[66%]"
              alt="ProductD Two"
            />
          </Column>
          <Img
            src="images/img_productd_511X610.png"
            className="lg:h-[398px] xl:h-[455px] 2xl:h-[512px] 3xl:h-[614px] mt-[2px] w-[54%]"
            alt="ProductD Three"
          />
          <Column className="2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] w-[26%]">
            <Text className="font-raleway font-semibold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
              Apollo
            </Text>
            <Text className="font-normal font-raleway xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
              Running Short
            </Text>
            <Text className="font-bold font-robotocondensed lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
              SIZE:
            </Text>
            <Row className="font-sourcesanspro items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[99%]">
              <Stack className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[22%]">
                <Text className="absolute bottom-[27%] font-normal inset-x-[0] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 tracking-ls1 w-[max-content]">
                  XS
                </Text>
                <Input
                  className="absolute w-[100%]"
                  wrapClassName="2xl:h-[46px] 3xl:h-[55px] absolute flex lg:h-[35px] w-[100%] xl:h-[41px]"
                  name="Rectangle381"
                  placeholder=""
                ></Input>
              </Stack>
              <Button
                className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[22%]"
                variant="OutlineGray900"
              >
                S
              </Button>
              <Stack className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[22%]">
                <Text className="absolute bottom-[27%] font-normal not-italic right-[38%] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_902 tracking-ls1 w-[auto]">
                  M
                </Text>
                <div className="absolute border border-gray_900 border-solid lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[100%]"></div>
              </Stack>
              <Button className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_902 tracking-ls1 w-[22%]">
                L
              </Button>
            </Row>
            <Text className="font-bold font-robotocondensed lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
              COLOR:
            </Text>
            <Img
              src="images/img_frame17.svg"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[40%]"
              alt="FrameSeventeen"
            />
            <Text className="font-bold font-robotocondensed lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
              PRICE:
            </Text>
            <Text className="font-bold font-raleway lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
              $50.00
            </Text>
            <Button
              className="font-raleway font-semibold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center uppercase w-[100%]"
              size="lg"
              variant="FillGreen400"
            >
              ADD TO CART
            </Button>
            <Text className="font-normal font-roboto leading-[159.96%] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[97%]">
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default PDPPage;
