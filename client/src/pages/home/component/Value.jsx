import React, { useState } from "react";
import "./homeComponent.css";
import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { data } from "./Acoordin";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "../home.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const Value = () => {
  return (
    <Flex height={"600px"}>
      <Box
        w={"600px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box overflow={"hidden"} borderTopRadius={"full"}>
          <Box boxSize={"300px"} className="Home-image">
            {/* <Box> */}
            <LazyLoadImage
              // boxSize="400px"
              // objectFit="cover"
              effect="blur"
              src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="House Image"
            />
          </Box>
        </Box>
      </Box>
      <Box flexGrow={"1"} mt={"16"}>
        <Box>
          <Heading
            mb={"3"}
            fontSize={"larger"}
            fontWeight={"hairline"}
            color={"orange"}
          >
            Our Value
          </Heading>
          <Heading mb={"3"} fontWeight={"medium"}>
            Value we give to you
          </Heading>
          <Text mb={"3"} w={"500px"}>
            We are a company that is committed to providing the best
            service,also believe a good place to live can make your life better
          </Text>
        </Box>
        <Box w={"500px"}>
          <Accordion
            className="accordin"
            allowMultipleExpanded={false}
            preExpanded={[0]}
            allowZeroExpanded
          >
            {data.map((data, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordin-item ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordin-button">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expand")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <Box className="icon">{data?.icon}</Box>
                      <Text fontSize={"2xl"}>{data?.heading}</Text>
                      <Box>
                        <MdOutlineArrowDropDown size={20} />
                      </Box>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Text>{data.description}</Text>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      </Box>
    </Flex>
  );
};

export default Value;
