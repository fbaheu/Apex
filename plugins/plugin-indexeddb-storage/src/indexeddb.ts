import Dexie, { UpdateSpec } from 'dexie';

import type { Collection, Storage } from '@apex/core/storage';
import { NOTE_COLLECTION_NAME } from '@apex/core/collections/note';
import { CATEGORY_COLLECTION_NAME } from '@apex/core/collections/category';
import { fail, fromThrowable, success, ThrowLess } from '@apex/throw-less';
import { BaseDocumentAttributesWithId, DocumentId, generateId, isDocumentId } from '@apex/core/collections';

/**
 * [STORAGE] Indexeddb
 * @description Define an indexeddb storage to store all data inside the browser.
 * @example
 * <caption>Example usage of **Storage** method.</caption>
 *
 * ````typescript jsx
 * const storage = Indexeddb;
 *
 * storage.create(CATEGORY_COLLECTION_NAME, { ... });
 * ```
 *
 */
export default new (class Indexeddb implements Storage {
  db_version = 1;
  db = new Dexie('Apex');

  async init() {
    this.db.version(this.db_version).stores({
      [CATEGORY_COLLECTION_NAME]: '&id, label',
      [NOTE_COLLECTION_NAME]: '&id, is_favorite, archived_at, *categories, removed_at',
    });
  }

  async create<Document extends BaseDocumentAttributesWithId>(collection: Collection, document: Omit<Document, keyof BaseDocumentAttributesWithId>): Promise<ThrowLess<Error, Document>> {
    if (!collection) {
      return fail<Error, Document>(new Error('TODO'));
    }

    // @ts-expect-error - Document could be instantiated with an arbitrary type which could be unrelated to DefaultDocumentAttributes
    const documentToCreate: Document = {
      ...document,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      archivedAt: undefined,
    };

    const result = await fromThrowable(() => this.db.table<Document>(collection).add(documentToCreate));

    if (result.isSuccess()) {
      const [, documentId] = result;
      return this.one(collection, documentId.toString());
    }

    return fail<Error, Document>(new Error('TODO'));
  }

  async one<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId): Promise<ThrowLess<Error, Document>> {
    if (!collection) {
      return fail<Error, Document>(new Error('TODO'));
    }

    if (!isDocumentId(documentId)) {
      return fail<Error, Document>(new Error('TODO'));
    }

    const result = await fromThrowable(() => this.db.table<Document>(collection).get(documentId));

    if (result.isSuccess()) {
      const [, document] = result;

      // Document retrieval can be success be return nothing
      if (document) {
        return success<Error, Document>(document);
      }
    }

    return fail<Error, Document>(new Error('TODO'));
  }

  async all<Document extends BaseDocumentAttributesWithId>(collection: Collection): Promise<ThrowLess<Error, Array<Document>>> {
    if (!collection) {
      return fail<Error, Array<Document>>(new Error('TODO'));
    }

    const result = await fromThrowable(() => this.db.table<Document>(collection).toArray());

    if (result.isSuccess()) {
      const [, documents] = result;
      return success<Error, Array<Document>>(documents);
    }

    return fail<Error, Array<Document>>(new Error('TODO'));
  }

  async update<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId, patch: Partial<Document>): Promise<ThrowLess<Error, Document>> {
    if (!collection) {
      return fail<Error, Document>(new Error('TODO'));
    }

    if (!isDocumentId(documentId)) {
      return fail<Error, Document>(new Error('TODO'));
    }

    const documentToUpdate = await this.one(collection, documentId);

    if (documentToUpdate.isFail()) {
      return fail<Error, Document>(documentToUpdate.at(0));
    }

    const [, document] = documentToUpdate;

    if (document?.archived_at) {
      // Document is archived and cannot be updated
      return fail<Error, Document>(new Error('TODO'));
    }

    const result = await fromThrowable(() => this.db.table<Document>(collection).update(documentId, {
      ...document,
      ...patch,
      updatedAt: new Date().toISOString(),
    } as UpdateSpec<Document>));

    if (result.isSuccess()) {
      const [, documentId] = result;
      return this.one(collection, documentId.toString());
    }

    return fail<Error, Document>(new Error('TODO'));
  }

  async archive<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId): Promise<ThrowLess<Error, Document>> {
    if (!collection) {
      return fail<Error, Document>(new Error('TODO'));
    }

    if (!isDocumentId(documentId)) {
      return fail<Error, Document>(new Error('TODO'));
    }

    return this.update(collection, documentId, {
      updated_at: new Date().toISOString(),
      archived_at: new Date().toISOString(),
    } as Partial<Document>);
  }

  async unarchive<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId): Promise<ThrowLess<Error, Document>> {
    if (!collection) {
      return fail<Error, Document>(new Error('TODO'));
    }

    if (!isDocumentId(documentId)) {
      return fail<Error, Document>(new Error('TODO'));
    }

    const documentToUnarchive = await this.one(collection, documentId);

    if (documentToUnarchive.isFail()) {
      return fail<Error, Document>(documentToUnarchive.at(0));
    }

    const [, document] = documentToUnarchive;

    if (!document?.archived_at) {
      // Document is not archived and cannot be unarchived
      return fail<Error, Document>(new Error('TODO'));
    }

    return this.update(collection, documentId, {
      updated_at: new Date().toISOString(),
      archived_at: undefined,
    } as Partial<Document>);
  }

  async remove<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId): Promise<ThrowLess<Error, true>> {
    if (!collection) {
      return fail<Error, true>(new Error('TODO'));
    }

    if (!isDocumentId(documentId)) {
      return fail<Error, true>(new Error('TODO'));
    }

    const documentToUnarchive = await this.one(collection, documentId);

    if (documentToUnarchive.isFail()) {
      return fail<Error, true>(documentToUnarchive.at(0));
    }

    const [, document] = documentToUnarchive;

    if (document?.archived_at) {
      // Document is not archived and cannot be removed
      return fail<Error, true>(new Error('TODO'));
    }

    const result = await fromThrowable(() => this.db.table<Document>(collection).delete(documentId));

    if (result.isSuccess()) {
      return success<Error, true>(true);
    }

    return fail<Error, true>(new Error('TODO'));
  }
})();
