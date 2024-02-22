import React from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { AiOutlinePlus } from "react-icons/ai";
import { RiEqualLine } from "react-icons/ri";
import Button from "../components/ui/Button";
import InfoListMessage from "../components/InfoListMessage";

const SHIPPING = 2500;

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(uid),
  });
  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section>
      <p>내 장바구니</p>
      {!hasProducts && <p>장바구니에 담긴 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className="mb-16">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className="flex flex-col border-b-2 border-black">
            <div className="flex items-center justify-between border-t-2 border-black">
              <PriceCard text="상품금액" price={totalPrice} />
              <AiOutlinePlus className="shrink-0" />
              <PriceCard text="배송액" price={SHIPPING} />
              <RiEqualLine className="shrink-0" />
              <PriceCard text="주문금액 합계" price={totalPrice + SHIPPING} />
            </div>
            <Button orderButton text="주문하기" />
          </div>
          <ul className="py-4 pl-2 text-gray-600">
            <InfoListMessage
              text={
                "동일 고객(ID기준)의 배송지가 일치하는 여러 건의 주문이 있을 경우, 에코 프렌들리 정책 따른 친환경 소비를 위해 출고일을 기준으로 자사 상품에 한해 합배송 서비스를 제공합니다."
              }
            />
            <InfoListMessage
              text={
                "만약 합배송 되어 상품을 수령하셨을 경우, 모든 주문이 배송완료된 후 결제한 배송비를 재계산하여 익일에 바오코인으로 돌려드립니다."
              }
            />
          </ul>
        </>
      )}
    </section>
  );
}
