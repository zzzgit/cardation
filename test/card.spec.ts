import {Heart, AceCard, Club, FaceCard, Rank} from "../src"


const acecard = new AceCard(new Club())
const facecard = new FaceCard(new Club(), Rank.K, 12)

describe("card.ts", () => {
	test("getRank", () => {
		const rank = acecard.getRank()
		return expect(rank).toBe(1)
	})
	test("getCardId", () => {
		const id = acecard.getCardId()
		return expect(id).toBe("c1.1")
	})
	test("getPoint", () => {
		const point = facecard.getPoint()
		return expect(point).toBe(12)
	})
	test("setPoint", () => {
		const acecard = new AceCard(new Club(), 1)
		acecard.setPoint(100)
		const point = acecard.getPoint()
		return expect(point).toBe(100)
	})
	test("equals", () => {
		const acecard = new AceCard(new Heart(), 1)
		const acecard2 = new AceCard(new Heart(), 1)
		const facecard = new FaceCard(new Heart(), Rank.K, 12)
		const facecard2 = new FaceCard(new Heart(), Rank.K, 12)
		return expect(acecard.equals(acecard2) && facecard.equals(facecard2)).toBe(true)
	})
})
