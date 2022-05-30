import {Request} from "express";
import {Query} from "mongoose";

export default class FilterService {
    static PAGINATION_FIELDS = ['page', 'sort', 'limit', 'fields'];

    static createQueryFromRequestFilters<T, Q>(req: Request, query: Query<T, Q, {}, Q>): Query<T, Q, {}, Q> {
        const filters = req.query;

        const paginationFields: any = {
            page: 1,
            sort: '-_id',
            limit: 10,
            fields: ''
        };

        this.PAGINATION_FIELDS.forEach((field) => {
            if (filters[field]) {
                paginationFields[field] = filters[field];
                delete filters[field];
            }
        });

        Object.entries(filters)
            .forEach(([key, value]) => {
                if (value) {
                    value = value.toString();
                    if (value.includes(',')) {
                        query = query.where(key).in(value.split(','));
                        return;
                    }
                    query = query.where(key).equals(value);
                }
            });

        return query
            .skip((paginationFields.page - 1) * paginationFields.limit)
            .limit(paginationFields.limit)
            .sort(paginationFields.sort)
            .select(paginationFields.fields.split(',').join(' '));
    }
}
