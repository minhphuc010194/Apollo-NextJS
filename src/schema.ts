import { makeSchema, queryType, stringArg } from "@nexus/schema";

const Query = queryType({
    definition(t) {
        t.string('name', {
            args: { name: stringArg() },
            resolve: (parent,{name})=>`Leigh halliday@@`,
        })
        // t.string("name", () => "Leigh Halliday");
    },
});

const types = { Query };

export const schema = makeSchema({
    types,
});

